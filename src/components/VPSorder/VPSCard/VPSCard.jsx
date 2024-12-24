import React, { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import ssd_icon from "../../../assets/img/ssd_icon.svg";
import hdd_icon from "../../../assets/img/hdd_icon.svg";
import turbo_icon from "../../../assets/img/turbo_icon.svg";
import plus_icon from "../../../assets/img/plus_icon.svg";
import OptionList from "../OptionList/OptionList";
import "./VPSCard.scss";

const VPSCard = ({ data }) => {
  const [isClickedButton, setIsClickedButton] = useState(false);

  const selectOs = useSelector(state => state.tariffs.selectOs);
  const selectPanel = useSelector(state => state.tariffs.selectPanel);

  const [activeOptionDistr, setActiveOptionDistr] = useState(selectOs[0]);
  const [activeOptionSoft, setActiveOptionSoft] = useState(selectPanel[0]);

  const [validDataPanel, setValidPanel] = useState([]);
  const filtered = (currentOption) => {
    setValidPanel([]);
    setActiveOptionDistr(currentOption);
    currentOption.panel_type.forEach(os => {
      selectPanel.forEach(soft => {
        if (soft.name.includes(os)) setValidPanel(old => [...old, soft]);
      })
    })
    setValidPanel((data) => {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => a.order - b.order);
      setActiveOptionSoft((prev) => {
        const current = dataToSort.filter(c => c === activeOptionSoft);
        return prev === current[0] ? current[0] : dataToSort[0];
      });

      return dataToSort;
    });
  };

  return (
    <div 
      className={
        classNames("VPS_card", {
          "ssd": data.category === "nvme",
          "hdd": data.category === "hdd",
          "turbo": data.category === "turbo",
        })
      }>
      <div className={"flexCard"}>
        <div className={"top"}>
          <div className={"top__img"}>
            <img
              src={data.category === "nvme" ? ssd_icon : data.category === "hdd" ? hdd_icon : turbo_icon}
              alt="icon"
            />
          </div>
          <p className={"name__title"}>{data.name}</p>
        </div>
        <div className={"price"}>
          <span>{data.price_per_month} ₽/мес.</span>
        </div>
        <div className={"params"}>
          <div className={"stats"}>
            <span className={"stats__title"}>CPU</span>
            <span className={"stats__param"}>
              {data.cpu_cores} x {(data.category_id === "1" && <label>2,8</label>) || (data.category_id === "2" && <label>2,1</label>) || (data.category_id === "3" && <label>5</label>)} ГГц
            </span>
          </div>
          <div className={"stats"}>
            <span className={"stats__title"}>RAM</span>
            <span className={"stats__param"}>{data.ram} МБ</span>
          </div>
          <div className={"stats"}>
            <span className={"stats__title"}>CPU</span>
            <span className={"stats__param"}>
              {data.volume_disk} {data.disk_type}
            </span>
          </div>
        </div>
        <div className={"optionBlock"}>
          <p className={"optionBlock__title"}>Дистрибутив</p>
          <OptionList
            data={selectOs}
            activeOption={activeOptionDistr}
            setOption={filtered}
            isDescription={true}
          />
        </div>
        <div className={"optionBlock"}>
          <p className={"optionBlock__title"}>Программное обеспечение</p>
          <OptionList
            data={validDataPanel.length > 0 ? validDataPanel : selectPanel}
            activeOption={activeOptionSoft}
            setOption={setActiveOptionSoft}
            isDescription={true}
          />
        </div>
        <div className={"optionBlock"}>
          <p className={"optionBlock__title"}>Дата-центр</p>
          <div className={"cities"}>
            <p className={"spb"}>Санкт-Петербург</p>
            <p className={"moscow"}>Москва</p>
          </div>
        </div>
        <div
          className={
            classNames("additional_desc", {
              "additional_desc_one": data.category_id === "2",
            })
          }>
          <div className={"additional_desc__img"}>
            <img className={"plus_icon"} src={plus_icon} alt={"+"} />
          </div>
          <div className={"text"}>
            <p>2 IP-адреса (lPv4 + lPv6)</p>
            <p>3 резервных копии</p>
          </div>
        </div>
      </div>
      <button
        className={
          classNames("orderButton", {
            "orderButton_active": isClickedButton
          })
        }
        onClick={() => setIsClickedButton((prev) => !prev)}>
        Заказать
      </button>
    </div>
  );
};

export default VPSCard;

import React from "react";
import "./Authors.css";
import elvira from "../../assets/elvira.jpg";
import stas from "../../assets/stas.jpg";

const Authors = () => {
  return (
    <div>
      <div className="authors">
        <img src={elvira} alt="elia_krupina_photo"></img>
        <p>
          Эля Крупина – выпускница режиссерского факультета СПбГАТИ. Режиссер
          эпизодов фильма «Русский ковчег» А. Сокурова, режиссер-репетитор
          фильма «Трудно быть Богом» А.Ю. Германа. Работала с Б. Хлебниковым, О.
          Бычковой, Н. Хомерики, А. Миндадзе, Иваном И. Твердовским, А. Гордоном
          и др.
        </p>
        <img src={stas} alt="stas_ryadinskiy_photo"></img>
        <p>
          Станислав Рядинский - русский актер, учился в школе-студии при МХАТ и
          училище им. Б.В. Щукина. В кино работал с Э. Рязановым, С. Урсуляком,
          Н. Хомерики и другими режиссёрами. С Элей Крупиной познакомились на
          фильме "Печорин"(реж. Р. Хрущ).
        </p>
      </div>
    </div>
  );
};

export default Authors;

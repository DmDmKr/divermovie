import React from 'react'
import './Authors.css'
import elvira from '../../assets/authors/elvira.jpg'
import stas from '../../assets/authors/stas2.jpg'

const Authors = () => {
  return (
    <div className="Authors">
      <img src={elvira} className="Elia" alt="фото Эли Крупиной"></img>
      <p>
        Эля Крупина – выпускница режиссерского факультета СПбГАТИ. Режиссер эпизодов фильма «Русский
        ковчег» А. Сокурова, режиссер-репетитор фильма «Трудно быть Богом» А.Ю. Германа. Работала с
        Б. Хлебниковым, О. Бычковой, Н. Хомерики, А. Миндадзе, Иваном И. Твердовским, А. Гордоном и
        др.
      </p>
      <img src={stas} className="Stas" alt="фото Стаса Рядинского"></img>
      <p>
        Станислав Рядинский - русский актер, учился в школе-студии при МХАТ и училище им. Б.В.
        Щукина. В кино работал с Э. Рязановым, С. Урсуляком, Н. Хомерики и другими режиссёрами.
      </p>
    </div>
  )
}

export default Authors

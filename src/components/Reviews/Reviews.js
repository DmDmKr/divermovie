import React from 'react'
import './Reviews.css'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import { DIVER_MOVIE_NAME, DRUNK_NOTES_MOVIE_NAME } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'

const Reviews = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')

  return (
    <div className="ReviewsWrapper">
      <MovieSelectionTabs />
      {(movie === DIVER_MOVIE_NAME || !movie) && (
        <div className="Reviews">
          <a
            href="https://rus-shake.ru/criticism/Gaydin/Hamlet-Diver/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Рецензия кандидата философских наук, шекспироведа Б.Н. Гайдина на сайте "Русский
            Шекспир"
          </a>
          <p>
            <b>Доктор искусствоведения, специалист по творчеству У. Шекспира А.В. Бартошевич</b>:​
            "Очень много точного, именно что гамлетовского.​ Лихорадочный задыхающийся бег, который
            невозможно остановить и обрывающийся только смертью... Тесные пространства подвалов,
            лестниц, переходов среди развалин, по которым блуждает в полубреду​ воспаленная, душа
            Гамлета, в конце вдруг сменяется полным воздуха простором смерти. ...поставлено и
            сыграно совершенно оригинально, я не заметил никаких подражаний."
          </p>
          <h1>
            <b>Отзывы интернет-зрителей:</b>
          </h1>
          <p>
            <b>@user-mj2up5iv8v</b>: ....не смогла оторваться. Завораживает.Необъяснимо.Наверное,это
            искусство....Спасибо.
          </p>
          <p>
            <b>@A.Williams-mi2gh</b>: Spectacular acting. Thank you!♥
          </p>
          <p>
            <b>@AnnW6c</b>: The highly-sensitive actor seems to be a real Hamlet. Nice going! I’d
            like to see on a big screen.
          </p>
          <p>
            <b>@user-kb8kz6qy3h</b>: Здорово! Талантливо! Спасибо
          </p>
          <p>
            <b>@user-zd6py2xm5n</b>: Сложный фильм, который не стоит смотреть с наскока. Возможно,
            даже не с одного подхода. Захотелось перечитать источник.
          </p>
        </div>
      )}
      {movie === DRUNK_NOTES_MOVIE_NAME && (
        <div className="Reviews">
          <h1>
            <b>Отзывы зрителей:</b>
          </h1>
          <p>
            <b>Архим. Савва(Мажуко)</b>: Вчера смотрели с котом Мартыном. Пронзительно. Что-то за
            пределом отчаяния и надежды. Мартын весь фильм просидел у меня на коленях, а он не
            любитель подолгу сидеть.
          </p>
          <p>
            <b>Александр Виста, музыкант</b>: Пронзительная работа. Пение в конце такое же сильное,
            как сам фильм.
          </p>
          <p>
            <b>Елена Ларина, журналист</b>: Режиссура и актёрское существование удивительного
            качества и совершенно неповторимы. Камерность, прозрачность, нежность и при этом одни
            крупные планы. Глаз не оторвать. В безысходной тоске - столько света и желания жить.
            Какая-то квантовая режиссура нового времени.
          </p>
        </div>
      )}
    </div>
  )
}

export default Reviews

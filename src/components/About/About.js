import React from 'react'
import './About.css'
import MovieSelectionTabs from '../MovieSelectionTabs/MovieSelectionTabs'
import diverConceptPhoto from '../../assets/diver_concept_photo.jpg'
import drunkNotesConceptPhoto from '../../assets/drunk_notes_concept_photo.jpg'
import { DIVER_MOVIE_NAME } from '../../utils/name_constants'
import { useSearchParams } from 'react-router-dom'

const About = () => {
  const [searchParams] = useSearchParams()
  const movie = searchParams.get('movie')

  return (
    <div className="About">
      <MovieSelectionTabs />

      {movie === DIVER_MOVIE_NAME || !movie ? (
        <>
          <p>
            Это кино на основе "Трагической истории о Гамлете, принце Датском" Уильяма Шекспира. В
            работе использовали классические переводы Б. Л. Пастернака, М. Л. Лозинского, М. М.
            Морозова, А. И. Кронеберга и др. Фильм снят на камеру смартфона. Нас поддерживали и
            помогали друзья и знакомые. Русский шекспировед А. В. Бартошевич написал так: "Очень
            много точного, именно что гамлетовского.​ Лихорадочный задыхающийся бег, который
            невозможно остановить и обрывающийся только смертью. …Тесные пространства подвалов,
            лестниц, переходов среди развалин, по которым блуждает в полубреду​ воспаленная, душа
            Гамлета, в конце вдруг сменяется полным воздуха простором смерти. …поставлено и сыграно
            совершенно оригинально, я не заметил никаких подражаний."
          </p>
          <img src={diverConceptPhoto} alt="water_rings_picture"></img>
        </>
      ) : (
        <>
          <p>
            Мой приход снедает тоска, точнее не скажешь. Как и множество других приходов! Тоска
            снедает их у нас на глазах, и мы тут бессильны. Возможно, не далек день, когда эта
            зараза коснется и нас, мы обнаружим в себе раковую опухоль. С нею можно жить очень
            долго. Эта мысль пришла мне в голову вчера на дороге. Моросил мелкий дождичек, из тех,
            что впитываешь легкими и влага заполняет тебя, проникая до самого нутра. С сенваастского
            откоса деревня вдруг увиделась мне такой ... Никогда прежде я не ощущал с такой
            пронзительной болью ее одиночество и мое собственное. … И она, деревня, казалось, также
            ждала — без большой надежды, — что после стольких ночей, проведенных в грязи, придет
            хозяин и поведет ее к какому-то несбыточному, непостижимому приюту. Жорж Бернанос
            "Дневник сельского священника"{' '}
          </p>
          <img src={drunkNotesConceptPhoto} alt="musians_on_moscow_street_picture"></img>
        </>
      )}
    </div>
  )
}

export default About
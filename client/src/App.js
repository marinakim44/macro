import "./App.css";
import "./Medium.css";
import "./Small.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="start-text">
        <h1 className="intro-heading">
          Ежеквартальный макроэкономический опрос PwC Казахстан
        </h1>
      </div>
      <p className="intro-text">
        Ежеквартальный макроэкономический опрос, проводимый PwC Казахстан на
        протяжении более полутора лет, позволяет ознакомиться с мнениями ведущих
        авторитетных экономистов, ученых, представителей международных банков
        развития, коммерческих банков и брокерских компаний. Данный опрос
        посвящен теме влияния экзогенных факторов на экономику Казахстана в
        периоде одного года, трех и пяти лет.
        <br />
        <br /> Вопросы этого квартала отражают наше стремление проводить более
        тщательное исследование, и мы хотим заранее поблагодарить Вас за
        участие.
        <br />
        <br />
        Результаты исследования будут представлены на нашем сайте, а также в
        различных СМИ в марте 2022 года.
        <br />
        <br />
        <i>
          Опрос проводится в соответствии с Кодексом Ассоциации Рыночных
          Исследований, обеспечивающим конфиденциальность участников. Если Вы
          пройдете опрос, Ваши ответы будут внесены вместе с остальными в базу
          на агрегированном уровне. Все ответы будут храниться в условиях
          строжайшей конфиденциальности и никогда не будут обнародованы без
          Вашего предварительного согласия. Сбор контактной информации необходим
          для того, чтобы мы могли предоставить Вам доступ к окончательным
          результатам и, при необходимости, прислать приглашение на местное
          мероприятие, на котором будут обсуждаться результаты опроса.
          Разглашению может подлежать только факт Вашего участия в опросе PwC
          (при наличии Вашего согласия). Агрегированные результаты и разрешенные
          комментарии (при их наличии) будут представлены широкой аудитории на
          сайте PwC Kazakhstan и по СМИ на регулярной основе.
        </i>
      </p>

      <Button
        style={{ border: "none" }}
        className="next-btn start-btn"
        onClick={() => navigate("/q1")}
      >
        Начать
      </Button>
    </div>
  );
}

export default App;

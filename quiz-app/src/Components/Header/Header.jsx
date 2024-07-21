import logo from "../../assets/quiz-logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="cute notebook" />
            <h1>Phones & AI Quiz</h1>
            <p>Welcome to my mobile tech quiz! 📱</p>
        </header>
    )
}

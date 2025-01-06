import { useState } from "react";
import axios from "axios";
import "../../assets/css/NavBar.css";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await axios.post("http://localhost:3000/feedback", {
                name,
                email,
                feedback,
            });

            if (response.status === 201) {
                setMessage("Feedback submitted successfully!");
                setName("");
                setEmail("");
                setFeedback("");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setMessage("Error submitting feedback. Please try again later.");
        }
    };

    return (
        <section style={{ padding: 20 }}>
            <div className="Footer">
                <div className="feedback-container">
                    <h3>We Value Your Feedback</h3>
                    <form className="feedback-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="feedback">Feedback:</label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                rows="4"
                                placeholder="Share your thoughts"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Submit Feedback
                        </button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default Footer;

import './Numbers.css';

function Numbers({ participants }) {
    return (
        <div className="participants">
            <h2>{participants.activity}</h2>
        </div>
    );
}

export default Numbers;
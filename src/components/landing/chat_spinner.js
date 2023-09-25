import spinner_gif from '../../assets/loading.gif';

export default function Chat_spinner() {
    return (
        <div className="relative w-[834px] mx-auto text-gray-100 text-base">
            <img src={spinner_gif} />
        </div>
    );
}
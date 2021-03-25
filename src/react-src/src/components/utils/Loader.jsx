import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
    );
}
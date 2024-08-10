import { HiEnvelope } from "react-icons/hi2";

const JoinForm = () => {
    return (
        <div>
            <div className="card bg-neutral text-neutral-content w-96">
                <form className="card-body items-center text-center space-y-2">
                    <h1 className="card-title">Join Fastcode</h1>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <HiEnvelope />
                        <input
                            type="email"
                            className="grow"
                            placeholder="john@doe.com"
                        />
                    </label>

                    <button className="btn btn-primary w-full">Join!</button>
                </form>
            </div>
        </div>
    );
};

export default JoinForm;

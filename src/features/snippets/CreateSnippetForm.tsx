import { HiPlus } from "react-icons/hi2";

const CreateSnippetButton = () => {
    return (
        <>
            <button
                className="btn btn-circle btn-primary"
                onClick={() => document.getElementById("modal")!.showModal()}
            >
                <HiPlus />
            </button>

            <dialog id="modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">
                            Create a new snippet ✍️
                        </h3>

                        <form className="flex flex-col gap-2 space-y-4">
                            <div className="space-y-2">
                                <label className="input input-bordered flex items-center gap-2">
                                    <span>📝</span>
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Center a div"
                                        required
                                    />
                                </label>

                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    rows={6}
                                    placeholder=".container {
    display: flex;
    justify-content: center;
    align-items: center;
}"
                                    required
                                ></textarea>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default CreateSnippetButton;

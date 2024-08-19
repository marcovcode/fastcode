import Spinner from "../../ui/Spinner";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";
import { useCreateSnippet } from "../auth/useCreateSnippet";
import { Tables } from "../../types";
import { useRef } from "react";

const CreateSnippetButton = () => {
    const modal = useRef<HTMLDialogElement>(null);

    const { handleSubmit, register } = useForm();
    const { createSnippet, isPending } = useCreateSnippet();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const snippet: Tables<"snippets"> = {
            title: formData.title,
            content: formData.content,
        };

        createSnippet(snippet, {
            onSuccess: () => {
                modal.current?.close();
            },
        });
    };

    return (
        <>
            <button
                className="btn btn-circle btn-primary"
                onClick={() =>
                    (document.getElementById(
                        "modal"
                    ) as HTMLDialogElement)!.showModal()
                }
            >
                <HiPlus />
            </button>

            <dialog id="modal" className="modal" ref={modal}>
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">
                            Create a new snippet ✂️
                        </h3>

                        <form
                            className="flex flex-col gap-2 space-y-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="space-y-2">
                                <label className="input input-bordered flex items-center gap-2">
                                    <span>🖊️</span>
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Center a div"
                                        required
                                        {...register("title")}
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
                                    {...register("content")}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary">
                                {isPending ? <Spinner /> : "Create"}
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default CreateSnippetButton;

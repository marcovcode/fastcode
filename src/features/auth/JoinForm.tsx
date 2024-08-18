import Spinner from "../../ui/Spinner";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useJoin } from "./useJoin";

const EMAIL_VALIDATION_REGEX = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

const JoinForm = () => {
    const { handleSubmit, register, formState } = useForm();
    const { join, isPending } = useJoin();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const { email } = formData;
        join(email);
    };

    return (
        <form
            className="sm:card sm:bg-neutral w-full sm:text-neutral-content text-base-content sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="sm:card-body flex flex-col space-y-4 items-center text-center sm:space-y-2">
                <h1 className="card-title">Start using Fastcode 🚀</h1>

                <label
                    className={`input input-bordered flex items-center gap-2 w-full ${
                        formState.errors.email && "input-error"
                    }`}
                >
                    <span>✉️</span>
                    <input
                        type="email"
                        className="grow"
                        placeholder="john@doe.com"
                        {...register("email", {
                            pattern: {
                                value: EMAIL_VALIDATION_REGEX,
                                message: "Invalid email address",
                            },
                        })}
                    />
                </label>

                <button className="btn btn-primary w-full">
                    {isPending ? <Spinner /> : "Join"}
                </button>
            </div>
        </form>
    );
};

export default JoinForm;

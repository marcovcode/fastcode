import Spinner from "../../ui/Spinner";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi2";
import { useCreateSnippet } from "../auth/useCreateSnippet";
import { Tables } from "../../types";
import { useRef } from "react";

const languages = [
    "text",
    "abap",
    "actionscript",
    "ada",
    "arduino",
    "autoit",
    "c",
    "clojure",
    "cs",
    "cpp",
    "coffeescript",
    "csharp",
    "css",
    "cuda",
    "d",
    "dart",
    "delphi",
    "elixir",
    "elm",
    "erlang",
    "fortran",
    "foxpro",
    "fsharp",
    "go",
    "graphql",
    "gql",
    "groovy",
    "haskell",
    "haxe",
    "html",
    "java",
    "javascript",
    "json",
    "julia",
    "jsx",
    "js",
    "kotlin",
    "latex",
    "lisp",
    "livescript",
    "lua",
    "mathematica",
    "makefile",
    "matlab",
    "objectivec",
    "objective",
    "objectpascal",
    "ocaml",
    "octave",
    "perl",
    "php",
    "powershell",
    "prolog",
    "puppet",
    "python",
    "qml",
    "r",
    "racket",
    "restructuredtext",
    "rest",
    "ruby",
    "rust",
    "sass",
    "less",
    "scala",
    "scheme",
    "shell",
    "smalltalk",
    "sql",
    "standardml",
    "sml",
    "swift",
    "tcl",
    "tex",
    "tsx",
    "ts",
    "typescript",
    "vala",
    "vbnet",
    "verilog",
    "vhdl",
    "xml",
    "xquery",
    "yaml",
];

const CreateSnippetButton = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const { handleSubmit, register, reset } = useForm();
    const { createSnippet, isPending } = useCreateSnippet();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const snippet: Tables<"snippets"> = {
            title: formData.title,
            content: formData.content,
            language: formData.language,
        };

        createSnippet(snippet, {
            onSuccess: () => {
                modalRef.current?.close();
                reset();
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

            <dialog id="modal" className="modal" ref={modalRef}>
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
                                <label
                                    className={`input input-bordered flex items-center gap-2 ${
                                        isPending && "disabled"
                                    }`}
                                >
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
                                    className={`textarea textarea-bordered w-full ${
                                        isPending && "disabled"
                                    }`}
                                    rows={6}
                                    placeholder=".container {
    display: flex;
    justify-content: center;
    align-items: center;
}"
                                    required
                                    {...register("content")}
                                ></textarea>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("language")}
                                >
                                    {languages.map((language) => (
                                        <option key={language}>
                                            {language}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                className={`btn btn-primary ${
                                    isPending && "disabled"
                                }`}
                            >
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

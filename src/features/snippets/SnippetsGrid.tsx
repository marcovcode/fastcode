import { atomOneDark, CopyBlock } from "react-code-blocks";
import { useSnippets } from "./useSnippets";

const SnippetsGrid = () => {
    const { snippets } = useSnippets();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {snippets?.map((snippet) => (
                <div className="flex justify-center" key={snippet.id}>
                    <div className="card bg-neutral text-neutral-content w-full">
                        <div className="card-body">
                            <div className="card-title flex justify-between">
                                <h1>{snippet.title}</h1>
                                <div className="badge badge-secondary">
                                    {snippet.language}
                                </div>
                            </div>
                        </div>

                        <CopyBlock
                            text={snippet.content}
                            language={snippet.language}
                            theme={atomOneDark}
                            codeBlock={true}
                            customStyle={{
                                padding: "1rem",
                                borderBottomLeftRadius: "1rem",
                                borderBottomRightRadius: "1rem",
                                fontFamily: "Roboto Mono",
                                height: "100%",
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SnippetsGrid;

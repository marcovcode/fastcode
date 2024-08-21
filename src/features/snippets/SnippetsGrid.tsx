import { atomOneDark, CopyBlock } from "react-code-blocks";
import { useSnippets } from "./useSnippets";
import { useSearchParams } from "react-router-dom";

const SnippetsGrid = () => {
    const { snippets } = useSnippets();
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get("search")?.toLowerCase();
    const filteredSnippets = snippets?.filter(
        (snippet) =>
            snippet.title.toLowerCase().includes(searchQuery) ||
            snippet.language.toLowerCase().includes(searchQuery) ||
            snippet.content.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSnippets?.map((snippet) => (
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

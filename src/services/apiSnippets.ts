import { Tables } from "../types";
import { supabase } from "./supabase";

export async function createSnippet(snippet: Tables<"snippets">) {
    const { error } = await supabase
        .from("snippets")
        .insert([
            {
                title: snippet.title,
                content: snippet.content,
                language: snippet.language,
            },
        ])
        .select();
    if (error) throw new Error(error.message);
}

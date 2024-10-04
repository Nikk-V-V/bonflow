import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
// export const supabaseClient = createClient(
//     process.env.PUBLIC_SUPABASE_URL,
//     process.env.PUBLIC_SUPABASE_ANON_KEY
// );

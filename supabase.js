const SUPABASE_URL = "https://mnvuljjmddtzahagotds.supabase.co";

const SUPABASE_KEY = "sb_publishable_3zorDcOwWyy9IjEl00LtGw_85-yv5X4";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// Disponibiliza o cliente para as outras páginas
window.supabaseClient = supabaseClient;

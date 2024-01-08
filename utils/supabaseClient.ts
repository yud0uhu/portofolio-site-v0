import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const client = createClient(
  "https://quepzvpqdaudlmrjyxee.supabase.co",
  Deno.env.get("SUPABASE_SECRET_KEY"),
);

export default client;

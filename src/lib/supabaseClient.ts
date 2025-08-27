import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xrfjomztvpixfvtyrtos.supabase.co'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY' // substitua pela sua anon key real

export const supabase = createClient(supabaseUrl, supabaseKey)

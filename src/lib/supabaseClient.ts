
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkstznotepmvvidywcow.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrc3R6bm90ZXBtdnZpZHl3Y293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMzQzMTAsImV4cCI6MjA3MTkxMDMxMH0.SZTtzwDIXfBCcF2-z3SjexGcpaG1i2C5eJtsHSDL5qU
const supabase = createClient(supabaseUrl, supabaseKey)

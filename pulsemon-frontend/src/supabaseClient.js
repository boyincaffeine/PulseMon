import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twpowrykbcecfyzaaaqx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cG93cnlrYmNlY2Z5emFhYXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODk4MjEsImV4cCI6MjA2ODE2NTgyMX0.ES3PYFCJYqyb9ekWtg_FofDRzqeYqdTBDvh4JXQJLOU'

export const supabase = createClient(supabaseUrl, supabaseKey)


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nhsvposwukhbfpfzzrja.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oc3Zwb3N3dWtoYmZwZnp6cmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0NTMwOTQsImV4cCI6MjEwOTAyOTA5NH0.UYdJGmsVREuLPGHW4pc7oO2FPEoGG8wXTfnVRrUKLsQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

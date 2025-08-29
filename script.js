document.getElementById("cadastroForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cadastro realizado com sucesso!");
});



import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkstznotepmvvidywcow.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Aqui você pode adicionar interações futuras
console.log("VA Beauty Studio carregado com sucesso!");

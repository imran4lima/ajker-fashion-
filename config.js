const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const APP_CONFIG = { brand: 'AJKER FASHION', currency: '৳', deliveryInsideDhaka: 60, deliveryOutsideDhaka: 120, supabaseEnabled: SUPABASE_URL.startsWith('http') && !SUPABASE_URL.includes('YOUR_') };
const STORAGE_KEYS = { cart:'af_cart', wishlist:'af_wishlist', users:'af_users', currentUser:'af_current_user', orders:'af_orders', newsletter:'af_newsletter', customProducts:'af_custom_products' };

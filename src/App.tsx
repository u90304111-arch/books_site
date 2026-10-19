import { useState, useMemo } from 'react';
import { BOOKS_DATA, Book } from './data/books';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GenresSection } from './components/GenresSection';
import { BookCard } from './components/BookCard';
import { BookModal } from './components/BookModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WhyUsSection } from './components/WhyUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ResultsCounterSection } from './components/ResultsCounterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { UserProfileModal } from './components/UserProfileModal';
import { Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Barchasi');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<number[]>([1, 7]);
  
  const [activeModalBook, setActiveModalBook] = useState<Book | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Filter books by search query & genre
  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter((book) => {
      const matchesGenre = selectedGenre === 'Barchasi' || book.genre === selectedGenre;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.genre.toLowerCase().includes(q);

      return matchesGenre && matchesSearch;
    });
  }, [searchQuery, selectedGenre]);

  // Cart Handlers
  const handleAddToCart = (book: Book, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { book, quantity }];
    });
    showToast(`"${book.title}" savatchaga qo'shildi! 🛒`);
  };

  const handleUpdateQuantity = (bookId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.book.id === bookId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (bookId: number) => {
    setCartItems((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleBuyNow = (book: Book, quantity = 1) => {
    handleAddToCart(book, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Wishlist toggle
  const handleToggleWishlist = (bookId: number) => {
    setWishlistIds((prev) => {
      const isSaved = prev.includes(bookId);
      if (isSaved) {
        showToast("Sevimlilardan olib tashlandi");
        return prev.filter((id) => id !== bookId);
      } else {
        showToast("Sevimlilar safiga qo'shildi ❤️");
        return [...prev, bookId];
      }
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Toast Notification Bar */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-amber-500/40 text-amber-300 font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in text-sm">
          <CheckCircle2 className="w-5 h-5 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Fixed Header Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('books');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onAboutClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Genres Filter Section */}
        <GenresSection
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />

        {/* Books Section (Mashhur kitoblar / Barcha 10 ta kitob) */}
        <section id="books" className="py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Sara Asarlar
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                  Mashhur kitoblar
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  O'quvchilar tomonidan eng ko'p tanlangan va tavsiya etilgan kitoblar
                </p>
              </div>

              {/* Status pill showing total count */}
              <div className="glass-panel px-4 py-2 rounded-full border border-amber-500/20 text-xs text-amber-300 font-medium shrink-0 self-start md:self-auto flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{filteredBooks.length} ta kitob ko'rsatilmoqda</span>
              </div>
            </div>

            {/* Books Grid */}
            {filteredBooks.length === 0 ? (
              <div className="glass-card p-12 text-center rounded-3xl space-y-4 max-w-md mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto text-amber-400 text-2xl font-serif">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-white font-serif">
                  Siz qidirgan kitob topilmadi
                </h3>
                <p className="text-xs text-gray-400">
                  Iltimos, boshqa qidiruv so'zini kiriting yoki barcha janrlarni ko'rish uchun filtrni tozalang.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGenre('Barchasi');
                  }}
                  className="gold-gradient-bg text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Filtrni qayta tiklash
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onSelect={(b) => setActiveModalBook(b)}
                    onAddToCart={(b) => handleAddToCart(b, 1)}
                    isWishlisted={wishlistIds.includes(book.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Why Us Section */}
        <WhyUsSection />

        {/* How Buying Works (3 steps) */}
        <HowItWorksSection />

        {/* Animated Results Statistics Counter */}
        <ResultsCounterSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Newsletter Subscription */}
        <NewsletterSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Book Detail Modal */}
      <BookModal
        book={activeModalBook}
        onClose={() => setActiveModalBook(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Demo Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onSuccess={() => {
          setCartItems([]);
          showToast("Demo buyurtmangiz qabul qilindi! 📦");
        }}
      />

      {/* User Profile Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        wishlistIds={wishlistIds}
        allBooks={BOOKS_DATA}
        onSelectBook={(b) => setActiveModalBook(b)}
      />

    </div>
  );
}

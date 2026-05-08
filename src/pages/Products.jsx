import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, Grid, List, Package, Truck, Shield, RotateCcw } from 'lucide-react'

const Products = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: '全部', count: 12 },
    { id: 'clothing', name: '服饰', count: 4 },
    { id: 'accessories', name: '配饰', count: 5 },
    { id: 'home', name: '家居', count: 2 },
    { id: 'gift', name: '礼品', count: 1 },
  ]

  const products = [
    { id: 1, name: '苗绣手工披肩', category: 'accessories', price: 599, originalPrice: 799, rating: 4.9, sales: 328, reviews: 86, desc: '纯手工刺绣，传统蝴蝶纹样，适合各种场合佩戴', image: 'miao%20embroidery%20handmade%20shawl%20traditional%20chinese%20craft%20elegant' },
    { id: 2, name: '苗族银饰套装', category: 'accessories', price: 1299, originalPrice: 1599, rating: 4.8, sales: 156, reviews: 42, desc: '传统苗族银饰工艺，精美雕刻，收藏送礼佳品', image: 'miao%20silver%20jewelry%20set%20traditional%20chinese%20ethnic%20accessories' },
    { id: 3, name: '苗绣旗袍', category: 'clothing', price: 1999, originalPrice: 2599, rating: 5.0, sales: 89, reviews: 28, desc: '东方韵味，匠心之作，传统苗绣与现代旗袍完美融合', image: 'miao%20embroidery%20qipao%20traditional%20chinese%20dress%20elegant' },
    { id: 4, name: '苗绣抱枕', category: 'home', price: 299, originalPrice: 399, rating: 4.7, sales: 512, reviews: 156, desc: '精美苗绣图案，舒适面料，家居装饰首选', image: 'miao%20embroidery%20pillow%20home%20decor%20traditional%20craft' },
    { id: 5, name: '苗绣手提包', category: 'accessories', price: 459, originalPrice: 599, rating: 4.8, sales: 234, reviews: 68, desc: '时尚与传统完美融合，日常百搭款式', image: 'miao%20embroidery%20handbag%20traditional%20chinese%20craft%20bag' },
    { id: 6, name: '苗绣围巾', category: 'accessories', price: 399, originalPrice: 499, rating: 4.6, sales: 456, reviews: 128, desc: '柔软舒适，保暖性强，传统纹样设计', image: 'miao%20embroidery%20scarf%20traditional%20chinese%20craft%20warm' },
    { id: 7, name: '苗绣挂画', category: 'home', price: 899, originalPrice: 1199, rating: 4.9, sales: 78, reviews: 24, desc: '纯手工刺绣艺术挂画，极具收藏价值', image: 'miao%20embroidery%20wall%20art%20traditional%20chinese%20painting' },
    { id: 8, name: '苗绣礼品盒', category: 'gift', price: 699, originalPrice: 899, rating: 4.8, sales: 167, reviews: 52, desc: '精美包装，内含多件苗绣精品，送礼首选', image: 'miao%20embroidery%20gift%20box%20traditional%20chinese%20craft%20packaging' },
    { id: 9, name: '苗绣连衣裙', category: 'clothing', price: 899, originalPrice: 1199, rating: 4.7, sales: 198, reviews: 56, desc: '优雅大方，苗绣元素点缀，展现东方美', image: 'miao%20embroidery%20dress%20traditional%20chinese%20fashion' },
    { id: 10, name: '苗绣发簪', category: 'accessories', price: 199, originalPrice: 259, rating: 4.5, sales: 678, reviews: 189, desc: '精致银饰与苗绣结合，古典优雅', image: 'miao%20embroidery%20hairpin%20traditional%20chinese%20accessory' },
    { id: 11, name: '苗绣外套', category: 'clothing', price: 1599, originalPrice: 1999, rating: 4.9, sales: 67, reviews: 18, desc: '冬季保暖，苗绣装饰，时尚与传统兼具', image: 'miao%20embroidery%20jacket%20traditional%20chinese%20clothing' },
    { id: 12, name: '苗绣T恤', category: 'clothing', price: 299, originalPrice: 399, rating: 4.6, sales: 456, reviews: 134, desc: '休闲舒适，苗绣图案点缀，日常百搭', image: 'miao%20embroidery%20tshirt%20traditional%20chinese%20casual' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return b.rating - a.rating
      default: return b.sales - a.sales
    }
  })

  const services = [
    { icon: Truck, title: '全国包邮', desc: '满199元免运费' },
    { icon: Shield, title: '正品保障', desc: '100%手工正品' },
    { icon: RotateCcw, title: '七天退换', desc: '不满意可退换' },
    { icon: Package, title: '精美包装', desc: '礼盒包装赠送' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-meta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">产品展示</h1>
            <p className="text-xl text-white/80 mb-4">精选苗绣工艺，传承民族文化</p>
            <p className="text-white/60 max-w-2xl mx-auto">
              每一件苗绣作品都凝聚着绣娘的心血与智慧，从设计到成品历经数十道工序，确保每一件产品都是精品。我们承诺所有产品均为纯手工制作，传承千年苗绣技艺。
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-meta-blue/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-meta-blue" />
                </div>
                <div>
                  <div className="font-medium text-dark-charcoal text-sm">{service.title}</div>
                  <div className="text-slate-gray text-xs">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-pill font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-meta-blue text-white'
                      : 'bg-soft-gray text-slate-gray hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-gray" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-divider rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-meta-blue/20 bg-white"
                >
                  <option value="popular">按销量</option>
                  <option value="price-low">价格从低到高</option>
                  <option value="price-high">价格从高到低</option>
                  <option value="rating">按评分</option>
                </select>
              </div>
              <div className="flex bg-soft-gray rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {sortedProducts.map((product) => (
              <div key={product.id} className={`bg-soft-gray rounded-card overflow-hidden hover-lift group ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}>
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${product.image}&image_size=square`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-cherry text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-meta-blue w-12 h-12 rounded-full flex items-center justify-center hover:bg-meta-blue hover:text-white transition-colors mx-2">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-meta-blue text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-meta-blue-hover transition-colors mx-2">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-semibold text-dark-charcoal mb-2">{product.name}</h3>
                  <p className="text-slate-gray text-sm mb-3 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-warning-amber fill-current" />
                      <span className="text-sm text-dark-charcoal ml-1">{product.rating}</span>
                    </div>
                    <span className="text-slate-gray text-sm">|</span>
                    <span className="text-slate-gray text-sm">{product.sales}已售</span>
                    <span className="text-slate-gray text-sm">|</span>
                    <span className="text-slate-gray text-sm">{product.reviews}评价</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-cherry">¥{product.price}</span>
                      <span className="text-sm text-slate-gray line-through">¥{product.originalPrice}</span>
                    </div>
                    <button className="text-meta-blue text-sm font-medium hover:text-meta-blue-hover">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-gray text-xl">暂无该分类产品</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">定制服务</h3>
                <p className="text-slate-gray mb-4">
                  我们提供个性化定制服务，根据您的需求定制专属苗绣作品。无论是婚礼礼服、企业礼品还是艺术收藏，我们都能为您量身打造。
                </p>
                <ul className="space-y-2 text-slate-gray mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>专业设计师一对一沟通</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>传统纹样与现代设计融合</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>资深绣娘手工制作</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>品质保证，售后无忧</span>
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  联系定制
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://neeko-copilot.bytedance.net/api/text2image?prompt=custom%20made%20miao%20embroidery%20service%20traditional%20chinese%20craft&image_size=landscape_4_3"
                  alt="定制服务"
                  className="w-full h-64 object-cover rounded-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

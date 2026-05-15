import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, Grid, List, Package, Truck, Shield, RotateCcw } from 'lucide-react'

const Products = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: '全部', count: 12 },
    { id: 'bedding', name: '智能床品', count: 3 },
    { id: 'wall', name: '光影壁饰', count: 2 },
    { id: 'curtain', name: '透光窗帘', count: 2 },
    { id: 'cabinet', name: '柜体系统', count: 3 },
    { id: 'derivative', name: '非遗衍生品', count: 2 },
  ]

  const products = [
    { id: 1, name: '星河智能温控床品', category: 'bedding', price: '暂无定价', originalPrice: 1599, rating: 4.9, sales: 234, reviews: 68, desc: '将相变材料植入竹纤维面料，实现18-28℃自动温控，99%天然抗菌率', image: '/images/pdt1.jpg' },
    { id: 2, name: '蝴蝶妈妈AR互动床品', category: 'bedding', price: '暂无定价', originalPrice: 1299, rating: 4.8, sales: 189, reviews: 45, desc: '扫描纹样即可触发苗族神话故事动画，让静态苗绣转化为可交互文化载体', image: '/images/pdt2.png' },
    { id: 3, name: '云纹竹纤维四件套', category: 'bedding', price: '暂无定价', originalPrice: 899, rating: 4.7, sales: 345, reviews: 89, desc: '全链路可降解竹纤维材质，减少60%水耗，践行绿色环保理念', image: '/images/pdt3.png' },
    { id: 4, name: '动态光影壁饰', category: 'wall', price: '暂无定价', originalPrice: 1999, rating: 4.9, sales: 78, reviews: 24, desc: '嵌入柔性LED和调光膜技术，实现16种光影模式切换及0-100%无极调光', image: '/images/pdt4.png' },
    { id: 5, name: '模块化AI定制壁饰', category: 'wall', price: '暂无定价', originalPrice: 1599, rating: 4.8, sales: 123, reviews: 36, desc: '支持AI定制图案，模块化设计可自由组合，打造个性化非遗体验空间', image: '/images/pdt5.png' },
    { id: 6, name: '透光智能窗帘', category: 'curtain', price: '暂无定价', originalPrice: 1199, rating: 4.7, sales: 234, reviews: 56, desc: '智能调光技术，苗绣纹样透光设计，兼顾隐私与美学', image: '/images/pdt5.png' },
    { id: 7, name: '渐变色透光窗帘', category: 'curtain', price: '暂无定价', originalPrice: 999, rating: 4.6, sales: 178, reviews: 42, desc: '渐变色彩设计，融合传统纹样与现代审美，营造温馨氛围', image: '/images/pdt5.png' },
    { id: 8, name: '磁吸苗绣衣柜', category: 'cabinet', price: '暂无定价', originalPrice: 3599, rating: 4.9, sales: 45, reviews: 12, desc: '可更换苗绣面板设计，获得外观设计专利，兼具实用与审美', image: '/images/pdt6.png' },
  ]

  const getImageUrl = (image) => {
    if (image.startsWith('/images/')) {
      return image
    } else {
      return `https://neeko-copilot.bytedance.net/api/text2image?prompt=${image}&image_size=square`
    }
  }

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': 
        if (a.price === '暂无定价') return 1
        if (b.price === '暂无定价') return -1
        return a.price - b.price
      case 'price-high': 
        if (a.price === '暂无定价') return -1
        if (b.price === '暂无定价') return 1
        return b.price - a.price
      case 'rating': return b.rating - a.rating
      default: return b.sales - a.sales
    }
  })

  const services = [
    { icon: Shield, title: '正品保障', desc: '100%手工正品' },
    { icon: Truck, title: '全国包邮', desc: '满199元免运费' },
    { icon: RotateCcw, title: '七天退换', desc: '不满意可退换' },
    { icon: Package, title: '精美包装', desc: '礼盒包装赠送' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-meta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">星河系列产品</h1>
            <p className="text-xl text-white/80 mb-4">非遗活化 · 智能科技 · 绿色环保</p>
            <p className="text-white/60 max-w-2xl mx-auto">
              苗绣竹韵星河系列产品，将贵州苗绣非遗技艺与现代智能家居深度融合。运用相变材料、AR技术、可降解竹纤维等创新科技，打造兼具文化内涵与实用功能的家居体验。
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
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.price !== '暂无定价' && (
                    <div className="absolute top-3 left-3 bg-cherry text-white text-xs px-2 py-1 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
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
                      {product.price === '暂无定价' ? (
                        <span className="text-xl font-bold text-cherry">{product.price}</span>
                      ) : (
                        <>
                          <span className="text-xl font-bold text-cherry">¥{product.price}</span>
                          <span className="text-sm text-slate-gray line-through">¥{product.originalPrice}</span>
                        </>
                      )}
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
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">纹样共创平台</h3>
                <p className="text-slate-gray mb-4">
                  我们搭建"纹样数字版权库"和DIY设计平台，允许用户参与纹样再创作，您的设计方案一经采纳即可获得销售分成。
                </p>
                <ul className="space-y-2 text-slate-gray mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>纹样数字版权库开放使用</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>用户参与纹样再创作</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>设计采纳可获销售分成</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>构建用户参与式开放生态</span>
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  参与共创
                </button>
              </div>
              <div className="relative">
                <img
                  src="/images/prudoctbottom.jpg"
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

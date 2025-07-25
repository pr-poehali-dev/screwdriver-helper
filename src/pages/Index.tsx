import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const tools = [
    {
      id: 1,
      name: "Шуруповёрт ДАРНЫЙ",
      image: "/img/cc20d271-d7ab-4bf0-b51b-703290a9a0d4.jpg",
      price: 1816,
      oldPrice: 2800,
      specifications: {
        power: "18V Li-Ion",
        speed: "1650 об/мин",
        weight: "1.3 кг",
        torque: "42 Н·м"
      },
      features: ["Плавный пуск", "Реверс", "LED подсветка", "Кейс в комплекте"]
    },
    {
      id: 2,
      name: "Перфоратор ПРОФИ-28",
      image: "/img/396d628d-1f97-4a13-974b-26c109ebbe5e.jpg",
      price: 4250,
      oldPrice: 5200,
      specifications: {
        power: "800 Вт",
        speed: "1100 об/мин",
        weight: "2.8 кг",
        torque: "2.8 Дж"
      },
      features: ["3 режима работы", "SDS-plus патрон", "Антивибрация", "Глубиномер"]
    },
    {
      id: 3,
      name: "Угловая шлифмachine УШМ-125",
      image: "/img/396d628d-1f97-4a13-974b-26c109ebbe5e.jpg",
      price: 2890,
      oldPrice: 3400,
      specifications: {
        power: "1200 Вт",
        speed: "11000 об/мин",
        weight: "2.1 кг",
        disc: "125 мм"
      },
      features: ["Защита от перегрузки", "Плавный пуск", "Защитный кожух", "Дополнительная рукоятка"]
    }
  ];

  const reviews = [
    {
      name: "Александр П.",
      rating: 5,
      text: "Отличный шуруповёрт! Использую для сборки мебели, работает превосходно.",
      date: "15 января 2024"
    },
    {
      name: "Михаил К.",
      rating: 5,
      text: "Перфоратор мощный, справляется с бетоном без проблем. Рекомендую!",
      date: "22 декабря 2023"
    },
    {
      name: "Сергей Д.",
      rating: 4,
      text: "УШМ работает хорошо, но немного тяжеловата для длительной работы.",
      date: "8 февраля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ПроИнструмент</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#payment" className="text-gray-600 hover:text-primary transition-colors">Оплата</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <a href="#warranty" className="text-gray-600 hover:text-primary transition-colors">Гарантия</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Профессиональные инструменты для <span className="text-primary">серьёзной работы</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Качественные строительные и бытовые инструменты с детальными техническими характеристиками. 
              Гарантия качества и быстрая доставка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                <Icon name="Search" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">Официальная гарантия на все инструменты</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 text-sm">Доставка по всей России от 1 дня</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Экспертная поддержка</h3>
              <p className="text-gray-600 text-sm">Консультации по выбору инструментов</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Только проверенные бренды</h3>
              <p className="text-gray-600 text-sm">Работаем с надёжными производителями</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог инструментов</h2>
            <p className="text-xl text-gray-600">Профессиональные инструменты с детальными характеристиками</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={tool.image} 
                      alt={tool.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{tool.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{tool.price.toLocaleString()} ₽</span>
                    <span className="text-lg text-gray-400 line-through">{tool.oldPrice.toLocaleString()} ₽</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      -{Math.round((1 - tool.price / tool.oldPrice) * 100)}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-gray-900">Технические характеристики:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(tool.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Особенности:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Способы оплаты</h2>
            <p className="text-xl text-gray-600">Выберите удобный для вас способ оплаты</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Банковской картой</h3>
              <p className="text-gray-600 text-sm">Visa, MasterCard, МИР</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Banknote" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Наличными</h3>
              <p className="text-gray-600 text-sm">При получении товара</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Банковский перевод</h3>
              <p className="text-gray-600 text-sm">Для юридических лиц</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">СБП</h3>
              <p className="text-gray-600 text-sm">Система быстрых платежей</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-gray-800 mb-4">{review.text}</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
            <p className="text-xl text-gray-600 mb-8">
              ПроИнструмент — это надёжный партнёр для профессионалов и любителей. 
              Мы специализируемся на поставке качественных строительных и бытовых инструментов.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-600">лет на рынке</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10000+</div>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">товаров в каталоге</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-800">+7 (495) 123-45-67</p>
              <p className="text-gray-600 text-sm">Ежедневно с 9:00 до 21:00</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-800">info@proinstrument.ru</p>
              <p className="text-gray-600 text-sm">Ответим в течение часа</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-800">г. Москва, ул. Инструментальная, 15</p>
              <p className="text-gray-600 text-sm">Пн-Пт: 9:00-18:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section id="warranty" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Гарантия</h2>
            <p className="text-xl text-gray-600 mb-8">
              Мы гарантируем качество всех наших инструментов и предоставляем полную поддержку
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Официальная гарантия</h3>
                    <p className="text-gray-600">
                      На все инструменты предоставляется официальная гарантия от производителя от 1 до 3 лет
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Сервисное обслуживание</h3>
                    <p className="text-gray-600">
                      Ремонт и техническое обслуживание в авторизованных сервисных центрах
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="RotateCcw" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Возврат товара</h3>
                    <p className="text-gray-600">
                      Возможность возврата товара в течение 14 дней без объяснения причин
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Техническая поддержка</h3>
                    <p className="text-gray-600">
                      Консультации по использованию и обслуживанию инструментов от наших экспертов
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ПроИнструмент</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные инструменты для серьёзной работы
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Электроинструмент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ручной инструмент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Измерительный инструмент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Садовый инструмент</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@proinstrument.ru</p>
                <p>г. Москва, ул. Инструментальная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПроИнструмент. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
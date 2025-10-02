import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Index() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    { id: 1, title: 'Neon Dreams', album: 'Electric Nights', duration: '3:42' },
    { id: 2, title: 'City Lights', album: 'Electric Nights', duration: '4:15' },
    { id: 3, title: 'Midnight Run', album: 'Electric Nights', duration: '3:58' },
    { id: 4, title: 'Digital Love', album: 'Synth Wave', duration: '4:32' },
    { id: 5, title: 'Neon Highway', album: 'Synth Wave', duration: '3:25' },
  ];

  const albums = [
    { 
      id: 1, 
      title: 'Electric Nights', 
      year: '2024',
      cover: '/img/3e48566a-074a-4965-9da0-99779e80bd44.jpg'
    },
    { 
      id: 2, 
      title: 'Synth Wave', 
      year: '2023',
      cover: '/img/3e48566a-074a-4965-9da0-99779e80bd44.jpg'
    },
  ];

  const videos = [
    { id: 1, title: 'Neon Dreams - Official Video', views: '1.2M' },
    { id: 2, title: 'City Lights - Live Performance', views: '890K' },
    { id: 3, title: 'Behind The Scenes - Studio Session', views: '450K' },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ARTIST
            </h1>
            <div className="hidden md:flex gap-8">
              <a href="#hero" className="text-sm hover:text-primary transition-colors">Главная</a>
              <a href="#bio" className="text-sm hover:text-primary transition-colors">Биография</a>
              <a href="#media" className="text-sm hover:text-primary transition-colors">Медиа</a>
              <a href="#video" className="text-sm hover:text-primary transition-colors">Видео</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Music" size={16} className="mr-2" />
              Слушать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  NOVA
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Электронная музыка нового поколения. Погрузись в мир неоновых ритмов и синтетических мелодий.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Слушать сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Концерты
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/0673bc16-caa2-4591-bdcb-6df0e729ea32.jpg" 
                alt="Artist" 
                className="relative rounded-3xl w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Биография
          </h3>
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NOVA — это музыкальный проект, рожденный на стыке электроники и эмоций. 
                С 2020 года создаю звуковые ландшафты, которые переносят слушателей в параллельные миры неоновых городов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мои треки — это симфония синтезаторов, где каждая нота рассказывает историю о будущем, 
                которое уже наступило. Вдохновение черпаю из киберпанк-эстетики, ночных мегаполисов 
                и бесконечного космоса цифровой реальности.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Прослушиваний</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Альбома</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">120+</div>
                  <div className="text-sm text-muted-foreground">Концертов</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="media" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Медиа
          </h3>
          
          <Tabs defaultValue="player" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="player">
                <Icon name="Music" size={18} className="mr-2" />
                Плеер
              </TabsTrigger>
              <TabsTrigger value="albums">
                <Icon name="Disc3" size={18} className="mr-2" />
                Альбомы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="player">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center">
                      <Icon name="Music" size={80} className="text-primary/30" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{tracks[currentTrack].title}</h4>
                    <p className="text-muted-foreground">{tracks[currentTrack].album}</p>
                  </div>

                  <div className="flex items-center justify-center gap-6 mb-8">
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                    >
                      <Icon name="SkipBack" size={24} />
                    </Button>
                    <Button 
                      size="icon" 
                      className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      onClick={togglePlay}
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={28} />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
                    >
                      <Icon name="SkipForward" size={24} />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {tracks.map((track, index) => (
                      <div
                        key={track.id}
                        onClick={() => setCurrentTrack(index)}
                        className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                          index === currentTrack 
                            ? 'bg-primary/20 border border-primary/50' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                            {index === currentTrack && isPlaying ? (
                              <Icon name="Volume2" size={20} className="text-primary" />
                            ) : (
                              <span className="text-sm font-medium">{track.id}</span>
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{track.title}</div>
                            <div className="text-sm text-muted-foreground">{track.album}</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{track.duration}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="albums">
              <div className="grid md:grid-cols-2 gap-6">
                {albums.map((album) => (
                  <Card key={album.id} className="bg-card/50 backdrop-blur border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={album.cover} 
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                      <Button 
                        size="icon"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Play" size={28} />
                      </Button>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-1">{album.title}</h4>
                      <p className="text-muted-foreground">{album.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="video" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Видео
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="bg-card/50 backdrop-blur border-border overflow-hidden group cursor-pointer hover:border-secondary/50 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{video.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Eye" size={14} />
                    {video.views} просмотров
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h3>
          <p className="text-lg text-muted-foreground mb-12">
            Хочешь сотрудничать или просто поделиться впечатлениями? Пиши!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Youtube" size={20} className="mr-2" />
              YouTube
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Music" size={20} className="mr-2" />
              Spotify
            </Button>
          </div>
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            NOVA
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 NOVA. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-zen-music',
  standalone: false,
  templateUrl: './zen-music.component.html',
  styleUrl: './zen-music.component.css'
})
export class ZenMusicComponent {
 zenTracks = [
    {
      title: 'Please Calm My Mind',
      description: 'Âm thanh thiên nhiên giúp bạn thư giãn và tập trung',
      image: 'https://tse3.mm.bing.net/th/id/OIP.SfxkSh3ZvttK4oSDt53mgwAAAA?pid=Api&P=0&h=180',
      audioUrl: 'assets/audio/just-relax.mp3',
    },
    {
      //Just Relax
      title: 'Nhạc Thiền Buổi Sáng',
      description: 'Khởi đầu ngày mới với sự bình an',
      image: 'https://cdn.quotesgram.com/img/63/61/1809198674-Just-Relax-Beach.jpg',
      audioUrl: 'assets/audio/just-relax.mp3',
    },
    // Add more nếu muốn
  ];
}
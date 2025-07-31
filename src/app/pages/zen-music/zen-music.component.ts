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
      image: 'https://tse2.mm.bing.net/th/id/OIP.SSgzdqb6IlTYq8p_mnXhbAHaEK?pid=Api&P=0&h=180',
      audioUrl: 'assets/audio/just-relax.mp3',
    },
    {
      //Just Relax
      title: 'Nhạc Thiền Buổi Sáng',
      description: 'Khởi đầu ngày mới với sự bình an',
      image: 'https://tse4.mm.bing.net/th/id/OIP.GfGhLfzrAWhQ672evIOo3QHaEK?pid=Api&P=0&h=180',
      audioUrl: 'assets/audio/just-relax.mp3',
    },
    // Add more nếu muốn
  ];
}
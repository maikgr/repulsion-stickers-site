import { Component, OnInit } from '@angular/core';
import { Sticker } from '../entity/sticker';
import { StickersService } from '../stickers.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickerList: Sticker[];

  constructor(private stickerService: StickersService) { }

  ngOnInit() {
    this.getStickers();
  }

  getStickers(): void {
    this.stickerService.getStickers()
        .subscribe(stickers => this.stickerList = stickers);
  }

  getStickerRows(): any[] {
    const stickerRows = [];
    const stickerPerRow = 6;
    const rowTotal = this.stickerList.length / stickerPerRow + 1;
    let i = 0;
    for (i; i < rowTotal; ++i) {
      const stickerCol = [];
      let j = 0;
      for (j; j < stickerPerRow; ++j) {
        const index = (stickerPerRow * i) + j;
        if (index >= this.stickerList.length) {
          break;
        }
        stickerCol.push(this.stickerList[index]);
      }
      stickerRows.push(stickerCol);
    }

    return stickerRows;
  }

}

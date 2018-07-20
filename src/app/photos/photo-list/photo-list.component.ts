import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const userName = this.activatedRoute.snapshot.params.userName;

    console.log(this.activatedRoute.snapshot.queryParams);

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => (this.photos = photos));
  }
}

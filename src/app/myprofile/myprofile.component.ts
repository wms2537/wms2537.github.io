import { Component } from '@angular/core';

enum MediaType {
  Video,
  Image,
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  chklApp: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app.mp4' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_1.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_2.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_3.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_4.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_5.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_app_6.png' }
  ];

  frvmacs: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/fracs.MP4' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/MSC%20Malaysia%20APICTA%202020%20Awards%20Winner_Face%20Recognition%20Access%20Control%20System.jpg' }
  ];

  wmscanner: { type: MediaType, url: string; }[] = [
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/wmscanner_1.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/wmscanner_2.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/wmscanner_3.png' },
    { type: MediaType.Image, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/wmscanner_4.png' }
  ];

  chklZoomAttendance: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl_zoom_attendance.mov' }
  ];

  fris: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/chkl30%20sec%20v4.mp4' }
  ];

  ddds: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/ddds.mp4' }
  ];

  dds: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/dolphins_detection_demo.mp4' }
  ];

  sparta: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/sparta.mp4' }
  ];

  ledCube: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/ledcube.mp4' }
  ];

  ledBadges: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://wmprofile.oss-cn-hongkong.aliyuncs.com/ledbadges.mp4' }
  ];

  public get mediaType(): typeof MediaType {
    return MediaType;
  }
}

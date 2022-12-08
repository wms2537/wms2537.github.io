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
  beautifood: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://bafybeibqqticrg3boxvp2nlay3us75odohihd73suvl7aamio5ocohefnm.ipfs.w3s.link/Beautifood_ver1.mp4' },
  ];
  jomfi: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://bafybeibqqticrg3boxvp2nlay3us75odohihd73suvl7aamio5ocohefnm.ipfs.w3s.link/Beautifood_ver1.mp4' },
  ];
  chklApp2: { type: MediaType, url: string; }[] = [
    { type: MediaType.Video, url: 'https://bafybeickbpedu52fuwr7tjbnda6m36ubvuta7zw62wknpzwe6xsx4vpntu.ipfs.w3s.link/ebf60779-c6c1-472b-9c10-e432db976ee2.MP4' },
    { type: MediaType.Video, url: 'https://bafybeihjcztdcblpj7sqtlgmphgbwqbowwqgqcheb7tbfvbr3lzukuaspi.ipfs.w3s.link/cf221328-9c7d-44d1-8b12-86eeb951ad42.MP4' },
    { type: MediaType.Video, url: 'https://bafybeickyjij2ohu466drtvjgmin7kfce7hdyka75opqjewlhwfqrffsie.ipfs.w3s.link/de4c3366-0783-4ce6-bc64-8204671bbc26.MP4' },
  ];
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

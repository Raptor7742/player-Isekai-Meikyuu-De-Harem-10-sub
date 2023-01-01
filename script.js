const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 10 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m204.syncusercontent.com/mfs-60:1d38951124760ae8dae44e44a74f3de0=============================/p/%5BTsundere-Raws%5D_Isekai_Meikyuu_de_Harem_wo_-_10_VOSTFR_(CR)_%5BWEB_720p_x264_AAC%5D.mp4?allowdd=0&datakey=mUoCd2kHdFWLWFR0j5Wb2rsBKp+FZgymM6pcP8uTxaoU4atU4oUNeeJe/bw56TuI+FQTS4dAJRpENnACPS+e5w/RTkJxIT2ibD+CSaKyCE/qGHnTfDj/lARwTlM33da25N2W1gkgRMVGJfMNJzXgYnWMRB0EFkCCxekBiijnQXav/0coqFWLBf/tApC+Jo8bN6iEv/p1PPFz1RaBCzhF5FkPoxBd4kCleJKIrxEercZ8IoGZd9yeVQsRJiVirqKFj7A2VDJmS2ZQe8Dei7lSYaM5LA2nsOxS51dFpXLFAPGQkQCHW2jSAg7EC2XGXKpFcb+LYwGQEycbV76XWOxNUg&engine=ln-2.3.7.3&errurl=r9wBlrybfjwo8xGBzq+rO6lqEPgkmXJohclw/jMkZlRVOBByVIEha25k5aaCywZadUjgD2/Oww7KySXRCFmrLcen48A/rxLAGOUZ+XNGB2n5TfgTe5YJ6TPEIJop9I+N73ij4M9oVtf8dzBThdkXidVhWzFzE8sQK7Gmr3YRvYJUGKyVh/luOj6r1UjzQF2sBTTlv53zFUjOWsWUUkNSiJwQlWS0dr4Tl8icRp9zuviFxJBSwWsabVsTblRhUC1vL/eymP3PxrnndYiVV+y057IZVBNf5lCovdjPsyD9plWAPfkDvGmbKAbFIUshpF8tZcA2u4xCqfsnpPSnc8XKqw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJTVCVHN1bmRlcmUtUmF3cyU1RF9Jc2VrYWlfTWVpa3l1dV9kZV9IYXJlbV93b18tXzEwX1ZPU1RGUl8oQ1IpXyU1QldFQl83MjBwX3gyNjRfQUFDJTVELm1wNCI7ZmlsZW5hbWUqPVVURi04JyclNUJUc3VuZGVyZS1SYXdzJTVEX0lzZWthaV9NZWlreXV1X2RlX0hhcmVtX3dvXy1fMTBfVk9TVEZSXyhDUilfJTVCV0VCXzcyMHBfeDI2NF9BQUMlNUQubXA0Ow&ipaddress=1458994159&linkcachekey=19ed46360&linkoid=652170001&mode=101&sharelink_id=9104619960001&timestamp=1672599115240&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=1c7fb5525a9ea12ebed5be2ded97c074de6771af&cachekey=60:1d38951124760ae8dae44e44a74f3de0=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});

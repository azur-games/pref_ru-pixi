export default function onPlay() {
    gtag("event", "play_online_click", {"value": ""});
    window.open('/play', '_self');
}
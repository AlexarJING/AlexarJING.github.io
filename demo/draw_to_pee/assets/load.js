var files = ["./assets/gen/ui/main_atlas0.png", "./assets/gen/ui/main/7n7q8.png", "./assets/gen/ui/main/7n7q9.png", "./assets/gen/ui/main/7n7qa.png", "./assets/gen/ui/main/7n7qb.png", "./assets/gen/ui/main/7n7qc.png", "./assets/gen/ui/main/7n7qd.png", "./assets/gen/ui/main/bbza15.png", "./assets/gen/ui/main/bbza16.png", "./assets/gen/ui/main/bbza18.png", "./assets/gen/ui/main/bbza19.png", "./assets/gen/ui/main/bbza1d.png", "./assets/gen/ui/main/bbza1e.png", "./assets/gen/ui/main/bbza1j.png", "./assets/gen/ui/main/bbza1n.png", "./assets/gen/ui/main/bbza1o.png", "./assets/gen/ui/main/bbza1p.png", "./assets/gen/ui/main/bbza1q.png", "./assets/gen/ui/main/bbza1r.png", "./assets/gen/ui/main/bbza1s.png", "./assets/gen/ui/main/bbza1t.png", "./assets/gen/ui/main/bbza1v.png", "./assets/gen/ui/main/bbza1z.png", "./assets/gen/ui/main/bbza20.png", "./assets/gen/ui/main/bbza22.png", "./assets/gen/ui/main/bbza23.png", "./assets/gen/ui/main/bbza24.png", "./assets/gen/ui/main/bbza25.png", "./assets/gen/ui/main/bbza27.png", "./assets/gen/ui/main/j7anl.png", "./assets/gen/ui/main/j7anm.png", "./assets/gen/ui/main/kywt2a.png", "./assets/gen/ui/main/kywt2b.png", "./assets/gen/ui/main/kywt2e.png", "./assets/gen/ui/main/kywt2f.png", "./assets/gen/ui/main/kywt2g.png", "./assets/gen/ui/main/kywt2h.png", "./assets/gen/ui/main/kywt2i.png", "./assets/gen/ui/main/kywt2j.png", "./assets/gen/ui/main/kywt2k.png", "./assets/gen/ui/main/kywt2l.png", "./assets/gen/ui/main/kywt2m.png", "./assets/gen/ui/main/kywt2o.png", "./assets/gen/ui/main/kywt2p.png", "./assets/gen/ui/main/kywt2t.png", "./assets/gen/ui/main/kywt2u.png", "./assets/png/warm-contrast.png"]


function lerp (start, end, val) {
    return start + (end - start) * val
}

// function loadProcess (current, amount) {
//     window.loadProcess = [current, amount]
//     // var val = lerp(31, 101, (current / amount))
//     // document.querySelector('.bar-progress').style.width = val + '%'
// }

setTimeout(function() {
for (var i = 0; i < files.length; i++) {
    let img = files[i]
    var image = new Image()
    // var image = document.getElementById('load-img')
    var count = 0
    image.src = img
    image.onload = function () {
        count++
        var percentNum = Math.floor(count / files.length * 100)
        console.log(percentNum)
        // loadProcess(count, files.length)
        window.loadProcess = [count, files.length]
        if (count >= files.length) {
            window.loadOK = true
        }
    }
}

}, 5000)

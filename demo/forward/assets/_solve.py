import os
import time
from concurrent.futures import ThreadPoolExecutor

lst = []

for i in os.listdir('.'):
    if i.endswith('.glb') and '-phy' not in i:
        lst.append(i)
        
        
def solve(i):
    print(i)
    # os.system(f'gltf-transform quantize {i} {i}')  # 有闪烁问题
    os.system(f'gltf-transform weld {i} {i}')
    # os.system(f'gltf-transform reorder {i} {i}')
    if 'lod2' in i:
        os.system(f'gltf-transform resize --width 32 --height 32 {i} {i}')
    else:
        #os.system(f'gltf-transform resize --width 2 --height 2 {i} {i}')
        #os.system(f'gltf-transform resize --width 256 --height 256 {i} {i}')
        os.system(f'gltf-transform resize --width 1024 --height 1024 {i} {i}')
        #os.system('gltf-transform uastc %s %s --level 4 --rdo 4 --slots "{normalTexture,occlusionTexture,metallicRoughnessTexture}" --zstd 18' % (i, i))
        os.system(f'gltf-transform oxipng {i} {i} --formats image/jpeg')  # 先转换，因为可能会有这个  PNG file has an ICC profile chunk.
        os.system('gltf-transform etc1s %s %s --quality 255 --power-of-two' % (i, i))
        # os.system('gltf-transform etc1s %s %s --quality 255' % (i, i))
        # os.system(f'gltf-transform mozjpeg {i} {i}')

    # 参数过于激进且不可调整，弃用
    #os.system(f'gltf-transform meshopt {i} {i} --level medium')  # 依赖一个扩展 https://juejin.cn/post/6931954784018628621

def solve_v2(i):
    # https://juejin.cn/post/6931954784018628621
    print(i)
    os.system(f'gltf-transform oxipng {i} {i} --formats *')  # 先转换，因为可能会有这个  PNG file has an ICC profile chunk.
    # os.system(f'gltfpack -i {i} -o {i} -vp 12 -vt 12 -cc -kn -km -ke  -tc -tu -tp')
    os.system(f'gltfpack -i {i} -o {i} -vp 16 -vt 12 -cc -kn -km -ke  -tc -tu -tp')


def solve_v3(i):
    # 经过这步之后，在下一步还会变大，但是没那么夸张了。
    # 猜测png降品质重压也一样，但效果也还OK就无所谓了
    os.system(f'gltf-transform mozjpeg {i} {i} --formats *')
    os.system(f'gltfpack -i {i} -o {i} -vp 16 -vt 12 -cc -kn -km -ke  -tc -tu -tp')


thread_executor = ThreadPoolExecutor(12)
#ret = list(thread_executor.map(solve, lst))
ret = list(thread_executor.map(solve, lst))


# 城市地块: 19MB -> 4MB
# 武侯: 22MB -> 15MB
# 武夷山: 19MB -> 4MB

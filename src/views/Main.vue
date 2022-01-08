<template>
    <div>
        <AppNavigation />
        <AppPageIndicator />

        <section class="w-full h-screen bg-pink-50">
            <KinesisContainer class="h-screen w-full">
                <div class="container">
                    <div
                        class="font-space-mono pt-72 flex justify-between items-end pr-20 z-30"
                    >
                        <div class="max-w-1/2">
                            <KinesisElement
                                tag="div"
                                maxY="1000"
                                axis="x"
                                originY="400"
                            >
                                <div class="text-8.5xl mb-5">
                                    front-end
                                    <span class="text-pink-300">&&_</span
                                    >design<span
                                        class="text-pink-300 animate-pulse"
                                        >|</span
                                    >
                                </div>
                            </KinesisElement>
                            <KinesisElement
                                tag="div"
                                maxX="100"
                                axis="y"
                                originX="500"
                            >
                                <div
                                    class="pl-1 text-4xl max-w-xl text-pink-500"
                                >
                                    Я - фронтенд разработчик и веб-дизайнер из
                                    Оренбурга
                                </div>
                            </KinesisElement>
                        </div>

                        <KinesisElement
                            tag="div"
                            maxY="100"
                            axis="Y"
                            originX="10"
                        >
                            <div
                                class="bg-pink-100 flex p-5 pr-32 rounded-2xl items-center"
                            >
                                <KinesisElement
                                    tag="div"
                                    maxY="10"
                                    axis="x"
                                    originY="40"
                                >
                                    <img
                                        class="rounded-full w-16 mr-4"
                                        :src="
                                            require('@/assets/images/bogdankorshunov.jpeg')
                                        "
                                        alt="Богдан Коршунов"
                                    />
                                </KinesisElement>
                                <div>
                                    <div>
                                        <KinesisElement
                                            class="flex items-center mb-2"
                                            maxX="10"
                                            axis="Y"
                                        >
                                            <AppGithubIcon
                                                class="mr-2"
                                                width="14"
                                            /><span>bogdankorshunov</span>
                                        </KinesisElement>
                                    </div>
                                    <div class="text-pink-primary flex">
                                        <KinesisElement maxX="15" axis="X">
                                            <a href="#" class="mr-5"
                                                >telegram</a
                                            >
                                        </KinesisElement>
                                        <KinesisElement maxX="10" axis="Y">
                                            <a href="#">instagram</a>
                                        </KinesisElement>
                                    </div>
                                </div>
                            </div>
                        </KinesisElement>
                    </div>
                </div>
                <KinesisElement
                    class="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed"
                    maxX="20"
                    axis="X"
                    originX="15"
                >
                    <div class="p-3 rounded-full bg-pink-100">
                        <AppMouseIcon
                            iconColor="fill-current text-pink-primary"
                            width="40"
                            height="40"
                        />
                    </div>
                </KinesisElement>
            </KinesisContainer>
        </section>
        <section class="w-full h-screen bg-green-50">
            <div class="container"></div>
        </section>
    </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppPageIndicator from '@/components/AppPageIndicator';
import AppGithubIcon from '@/assets/icons/IconGithub';
import AppMouseIcon from '@/assets/icons/IconMouse';
export default {
    components: {
        AppNavigation,
        AppGithubIcon,
        AppMouseIcon,
        AppPageIndicator,
    },
    setup() {
        const options = {
            licenseKey: 'YOUR_KEY_HEERE',
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3'],
            sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        };

        return { options };
    },
};
</script>

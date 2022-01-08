<template>
    <div class="w-full fixed z-10 top-0 bg-pink-50">
        <div class="container">
            <div
                class="flex w-full justify-between text-pink-primary font-space-mono py-3"
            >
                <div
                    class="text-xl px-4 py-3 pt-2 bg-pink-100 rounded-xl flex items-center"
                >
                    <div>korshunov</div>
                </div>
                <div
                    class="font-mono text-2xl px-4 py-4 pt-3 bg-pink-100 flex items-center rounded-xl"
                >
                    <div class="px-4">меню</div>

                    <app-menu-icon
                        class="stroke-current fill-current text-pink-primary"
                        width="2"
                    ></app-menu-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppMenuIcon from '@/assets/icons/IconMenu';
export default {
    components: {
        AppMenuIcon,
    },
    setup() {},
};
</script>

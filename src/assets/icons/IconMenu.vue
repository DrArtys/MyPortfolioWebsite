<template>
    <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 16H28"
            stroke="iconColor"
            :stroke-width="width"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 8H28"
            stroke="iconColor"
            :stroke-width="width"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 24H28"
            stroke="iconColor"
            :stroke-width="width"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'box',
        },
        width: {
            type: [Number, String],
            default: 18,
        },
        height: {
            type: [Number, String],
            default: 18,
        },
        iconColor: {
            type: String,
            default: 'currentColor',
        },
    }
};
</script>

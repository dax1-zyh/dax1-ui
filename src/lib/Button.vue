<template>
  <button
      class="dax1-button"
      :class="classes"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: 'button' //默认值
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`dax1-theme-${theme}`]: theme,
        [`dax1-size-${size}`]: size,
        [`dax1-level-${level}`]: level,
      }
    })
    return {classes}
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.dax1-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.dax1-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.dax1-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.dax1-size-big {
    font-size: 24px;
    height: 44px;
    padding: 0 16px
  }

  &.dax1-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.dax1-theme-button {
    &.dax1-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.dax1-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.dax1-theme-link {
    &.dax1-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.dax1-theme-text {
    &.dax1-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.dax1-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.dax1-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.dax1-theme-link, &.dax1-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>

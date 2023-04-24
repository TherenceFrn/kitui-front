<template>
    <main class="container">
        <header>
            <h1>Kit UI Generator</h1>
        </header>

        <div class="row">
            <div class="col col-lg-6">
                <h2>Parameters</h2>

                <form>
                    <div class="mb-5">
                        <h3>Container</h3>

                        <div class="mb-3">
                            <label for="container--max-width" class="form-label">Max-width</label>
                            <div class="input-group">
                                <input id="container--max-width" name="container--max-width" type="number" class="form-control" v-model="container.maxWidth">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="container--padding" class="form-label">Padding</label>
                            <div class="input-group">
                                <input id="container--padding" name="container--padding" type="number" class="form-control" v-model="container.padding">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <h3>Grid</h3>

                        <div class="mb-3">
                            <label for="grid--columns" class="form-label">Columns</label>
                            <input id="grid--columns" name="grid--columns" type="number" class="form-control" v-model="grid.columns">
                        </div>

                        <div class="mb-3">
                            <label for="grid--gap" class="form-label">Gap</label>
                            <div class="input-group">
                                <input id="grid--gap" name="grid--gap" type="number" class="form-control" v-model="grid.gap">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="grid--breakpoints--sm" class="form-label">Breakpoint SM</label>
                            <div class="input-group">
                                <input id="grid--breakpoints--sm" name="grid--breakpoints--sm" type="number" class="form-control" v-model="grid.breakpoints.sm">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="grid--breakpoints--md" class="form-label">Breakpoint MD</label>
                            <div class="input-group">
                                <input id="grid--breakpoints--md" name="grid--breakpoints--md" type="number" class="form-control" v-model="grid.breakpoints.md">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="grid--breakpoints--lg" class="form-label">Breakpoint LG</label>
                            <div class="input-group">
                                <input id="grid--breakpoints--lg" name="grid--breakpoints--lg" type="number" class="form-control" v-model="grid.breakpoints.lg">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="grid--breakpoints--xl" class="form-label">Breakpoint XL</label>
                            <div class="input-group">
                                <input id="grid--breakpoints--xl" name="grid--breakpoints--xl" type="number" class="form-control" v-model="grid.breakpoints.xl">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="grid--breakpoints--xxl" class="form-label">Breakpoint XXL</label>
                            <div class="input-group">
                                <input id="grid--breakpoints--xxl" name="grid--breakpoints--xxl" type="number" class="form-control" v-model="grid.breakpoints.xxl">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <h3>Colors</h3>

                        <div class="mb-3">
                            <label for="colors--primary" class="form-label">Primary</label>
                            <input id="colors--primary" name="colors--primary" type="color" class="form-control form-control-color" v-model="colors.primary.default">
                        </div>

                        <div class="mb-3">
                            <label for="colors--dark" class="form-label">Dark</label>
                            <input id="colors--dark" name="colors--dark" type="color" class="form-control form-control-color" v-model="colors.dark.default">
                        </div>

                        <div class="mb-3">
                            <label for="colors--light" class="form-label">Light</label>
                            <input id="colors--light" name="colors--light" type="color" class="form-control form-control-color" v-model="colors.light.default">
                        </div>
                    </div>

                    <div class="mb-5">
                        <h3>Fonts</h3>

                        <div class="mb-3">
                            <label for="fonts--titles--family" class="form-label">Titles family</label>
                            <select id="fonts--titles--family" name="fonts--titles--family" class="form-select" v-model="fonts.titles.family">
                                <option v-for="value in familyValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h1--size" class="form-label">h1 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h1--size" name="fonts--titles--h1--size" type="number" class="form-control" v-model="fonts.titles.h1.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h1--weight" class="form-label">h1 weight</label>
                            <select id="fonts--titles--h1--weight" name="fonts--titles--h1--weight" class="form-select" v-model="fonts.titles.h1.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h2--size" class="form-label">h2 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h2--size" name="fonts--titles--h2--size" type="number" class="form-control" v-model="fonts.titles.h2.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h2--weight" class="form-label">h2 weight</label>
                            <select id="fonts--titles--h2--weight" name="fonts--titles--h2--weight" class="form-select" v-model="fonts.titles.h2.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h3--size" class="form-label">h3 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h3--size" name="fonts--titles--h3--size" type="number" class="form-control" v-model="fonts.titles.h3.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h3--weight" class="form-label">h3 weight</label>
                            <select id="fonts--titles--h3--weight" name="fonts--titles--h3--weight" class="form-select" v-model="fonts.titles.h3.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h4--size" class="form-label">h4 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h4--size" name="fonts--titles--h4--size" type="number" class="form-control" v-model="fonts.titles.h4.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h4--weight" class="form-label">h4 weight</label>
                            <select id="fonts--titles--h4--weight" name="fonts--titles--h4--weight" class="form-select" v-model="fonts.titles.h4.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h5--size" class="form-label">h5 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h5--size" name="fonts--titles--h5--size" type="number" class="form-control" v-model="fonts.titles.h5.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h5--weight" class="form-label">h5 weight</label>
                            <select id="fonts--titles--h5--weight" name="fonts--titles--h5--weight" class="form-select" v-model="fonts.titles.h5.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h6--size" class="form-label">h6 size</label>
                            <div class="input-group">
                                <input id="fonts--titles--h6--size" name="fonts--titles--h6--size" type="number" class="form-control" v-model="fonts.titles.h6.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--titles--h6--weight" class="form-label">h6 weight</label>
                            <select id="fonts--titles--h6--weight" name="fonts--titles--h6--weight" class="form-select" v-model="fonts.titles.h6.weight">
                                <option v-for="value in weightValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--paragraphs--family" class="form-label">Paragraphs family</label>
                            <select id="fonts--paragraphs--family" name="fonts--paragraphs--family" class="form-select" v-model="fonts.paragraphs.family">
                                <option v-for="value in familyValues" :value="value">{{ value }}</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="fonts--paragraphs--size" class="form-label">Paragraphs size</label>
                            <div class="input-group">
                                <input id="fonts--paragraphs--size" name="fonts--paragraphs--size" type="number" class="form-control" v-model="fonts.paragraphs.size">
                                <span class="input-group-text">pixels</span>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-primary">Export!</button>
                </form>
            </div>

            <div class="col col-lg-6">
                <div class="preview">
                    <div class="preview--overflow">
                        <h2>Preview</h2>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h1.size + 'px',
                            fontWeight: fonts.titles.h1.weight
                        }">This is a h1</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h2.size + 'px',
                            fontWeight: fonts.titles.h2.weight
                        }">This is a h2</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h3.size + 'px',
                            fontWeight: fonts.titles.h3.weight
                        }">This is a h3</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h4.size + 'px',
                            fontWeight: fonts.titles.h4.weight
                        }">This is a h4</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h5.size + 'px',
                            fontWeight: fonts.titles.h5.weight
                        }">This is a h5</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.titles.family,
                            fontSize: fonts.titles.h6.size + 'px',
                            fontWeight: fonts.titles.h6.weight
                        }">This is a h6</span>

                        <span class="preview--element" :style="{
                            fontFamily: fonts.paragraphs.family,
                            fontSize: fonts.paragraphs.size + 'px',
                        }">This is a paragraph</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            container: {
                maxWidth: 1320,
                padding: 16
            },
            grid: {
                columns: 12,
                gap: 16,
                breakpoints: {
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: 1400
                }
            },
            colors: {
                primary: {
                    default: '#D81E5B',
                    darken: null,
                    lighten: null
                },
                dark: {
                    default: '#2F2F30',
                    darken: null,
                    lighten: null
                },
                light: {
                    default: '#F6F5FA',
                    darken: null,
                    lighten: null
                }
            },
            fonts: {
                titles: {
                    family: 'sans-serif',
                    h1: {
                        size: 40,
                        weight: 500
                    },
                    h2: {
                        size: 32,
                        weight: 500
                    },
                    h3: {
                        size: 28,
                        weight: 500
                    },
                    h4: {
                        size: 24,
                        weight: 500
                    },
                    h5: {
                        size: 20,
                        weight: 500
                    },
                    h6: {
                        size: 16,
                        weight: 500
                    }
                },
                paragraphs: {
                    family: 'sans-serif',
                    size: 16
                }
            },
            weightValues: [
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900
            ],
            familyValues: [
                'sans-serif',
                'Arial',
                'Nunito',
                'Roboto',
                'Lato'
            ]
        }
    },
    watch: {
        'colors.primary': {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                //TODO: update darken and lighten variations on primary color
            }
        },
        'colors.dark': {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                //TODO: update darken and lighten variations on dark color
            }
        },
        'colors.light': {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                //TODO: update darken and lighten variations on light color
            }
        }
    }
}
</script>

<style scoped>
.preview {
    position: sticky;
    top: 32px;
}

.preview--element {
    display: block;
    margin: 16px 0;
}

.preview--overflow {
    height: 100vh;
    overflow-y: auto;
}
</style>
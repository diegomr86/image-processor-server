webpackJsonp([9],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPageModule", function() { return PlantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plants__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlantsPageModule = /** @class */ (function () {
    function PlantsPageModule() {
    }
    PlantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */]
            ]
        })
    ], PlantsPageModule);
    return PlantsPageModule;
}());

//# sourceMappingURL=plants.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLoaderConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var ImageLoaderConfig = (function () {
    function ImageLoaderConfig() {
        this.debugMode = false;
        this.spinnerEnabled = true;
        this.fallbackAsPlaceholder = false;
        this.backgroundSize = 'contain';
        this.backgroundRepeat = 'no-repeat';
        this.display = 'block';
        this.width = '100%';
        this.height = '100%';
        this.useImg = false;
        this.concurrency = 5;
        this.maxCacheSize = -1;
        this.maxCacheAge = -1;
        this.imageReturnType = 'uri';
        this.fileNameCachedWithExtension = false;
        this.fallbackFileNameCachedExtension = '.jpg';
        this._cacheDirectoryName = 'image-loader-cache';
    }
    Object.defineProperty(ImageLoaderConfig.prototype, "cacheDirectoryName", {
        get: function () {
            return this._cacheDirectoryName;
        },
        set: function (name) {
            name.replace(/\W/g, '');
            this._cacheDirectoryName = name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enables debug mode to receive console logs, errors, warnings
     */
    ImageLoaderConfig.prototype.enableDebugMode = function () {
        this.debugMode = true;
    };
    /**
     * Enable/Disable the spinner by default. Defaults to true.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.enableSpinner = function (enable) {
        this.spinnerEnabled = enable;
    };
    /**
     * Enable/Disable the fallback image as placeholder instead of the spinner. Defaults to false.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.enableFallbackAsPlaceholder = function (enable) {
        this.fallbackAsPlaceholder = enable;
    };
    /**
     * Sets the cache directory name. Defaults to 'image-loader-cache'
     * @param name {string} name of directory
     */
    ImageLoaderConfig.prototype.setCacheDirectoryName = function (name) {
        this.cacheDirectoryName = name;
    };
    /**
     * Set default height for images that are not using <img> tag
     * @param height {string} height
     */
    ImageLoaderConfig.prototype.setHeight = function (height) {
        this.height = height;
    };
    /**
     * Set default width for images that are not using <img> tag
     * @param width {string} Width
     */
    ImageLoaderConfig.prototype.setWidth = function (width) {
        this.width = width;
    };
    /**
     * Enable display mode for images that are not using <img> tag
     * @param display {string} Display mode
     */
    ImageLoaderConfig.prototype.setDisplay = function (display) {
        this.display = display;
    };
    /**
     * Use <img> tag by default
     * @param use {boolean} set to true to use <img> tag by default
     */
    ImageLoaderConfig.prototype.useImageTag = function (use) {
        this.useImg = use;
    };
    /**
     * Set default background size for images that are not using <img> tag
     * @param backgroundSize {string} Background size
     */
    ImageLoaderConfig.prototype.setBackgroundSize = function (backgroundSize) {
        this.backgroundSize = backgroundSize;
    };
    /**
     * Set background repeat for images that are not using <img> tag
     * @param backgroundRepeat {string} Background repeat
     */
    ImageLoaderConfig.prototype.setBackgroundRepeat = function (backgroundRepeat) {
        this.backgroundRepeat = backgroundRepeat;
    };
    /**
     * Set fallback URL to use when image src is undefined or did not resolve.
     * This image will not be cached. This should ideally be a locally saved image.
     * @param fallbackUrl {string} The remote or local URL of the image
     */
    ImageLoaderConfig.prototype.setFallbackUrl = function (fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
    };
    /**
     * Set the maximum number of allowed connections at the same time.
     * @param concurrency
     */
    ImageLoaderConfig.prototype.setConcurrency = function (concurrency) {
        this.concurrency = concurrency;
    };
    /**
     * Sets the maximum allowed cache size
     * @param cacheSize {number} Cache size in bytes
     */
    ImageLoaderConfig.prototype.setMaximumCacheSize = function (cacheSize) {
        this.maxCacheSize = cacheSize;
    };
    /**
     * Sets the maximum allowed cache age
     * @param cacheAge {number} Maximum cache age in milliseconds
     */
    ImageLoaderConfig.prototype.setMaximumCacheAge = function (cacheAge) {
        this.maxCacheAge = cacheAge;
    };
    /**
     * Set the return type of cached images
     * @param imageReturnType {string} The return type; either 'base64' or 'uri'
     */
    ImageLoaderConfig.prototype.setImageReturnType = function (imageReturnType) {
        this.imageReturnType = imageReturnType;
    };
    /**
     * Set the default spinnern ame
     * @param name
     */
    ImageLoaderConfig.prototype.setSpinnerName = function (name) {
        this.spinnerName = name;
    };
    /**
     * Set the default spinner color
     * @param color
     */
    ImageLoaderConfig.prototype.setSpinnerColor = function (color) {
        this.spinnerColor = color;
    };
    /**
     * Set headers options for the HttpClient transfers.
     * @param headers
     */
    ImageLoaderConfig.prototype.setHttpHeaders = function (headers) {
        this.httpHeaders = headers;
    };
    /**
     * Set options for the FileTransfer plugin
     * @param options
     * @deprecated FileTransfer plugin removed.
     */
    ImageLoaderConfig.prototype.setFileTransferOptions = function (options) {
        // do nothing, plugin deprecated.
    };
    /**
     * Enable/Disable the save filename of cached images with extension.  Defaults to false.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.setFileNameCachedWithExtension = function (enable) {
        this.fileNameCachedWithExtension = enable;
    };
    /**
     * Set fallback extension filename of cached images.  Defaults to '.jpg'.
     * @param extension {string} fallback extension (e.x .jpg)
     */
    ImageLoaderConfig.prototype.setFallbackFileNameCachedExtension = function (extension) {
        this.fallbackFileNameCachedExtension = extension;
    };
    return ImageLoaderConfig;
}());

ImageLoaderConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
ImageLoaderConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=image-loader-config.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_loader_config__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);







var ImageLoader = (function () {
    function ImageLoader(config, file, http, platform) {
        var _this = this;
        this.config = config;
        this.file = file;
        this.http = http;
        this.platform = platform;
        /**
         * Indicates if the cache service is ready.
         * When the cache service isn't ready, images are loaded via browser instead.
         * @type {boolean}
         */
        this.isCacheReady = false;
        /**
         * Indicates if this service is initialized.
         * This service is initialized once all the setup is done.
         * @type {boolean}
         */
        this.isInit = false;
        /**
         * Number of concurrent requests allowed
         * @type {number}
         */
        this.concurrency = 5;
        /**
         * Queue items
         * @type {Array}
         */
        this.queue = [];
        this.processing = 0;
        /**
         * Fast accessable Object for currently processing items
         */
        this.currentlyProcessing = {};
        this.cacheIndex = [];
        this.currentCacheSize = 0;
        this.indexed = false;
        if (!platform.is('cordova')) {
            // we are running on a browser, or using livereload
            // plugin will not function in this case
            this.isInit = true;
            this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(document, 'deviceready').first().subscribe(function (res) {
                if (_this.nativeAvailable) {
                    _this.initCache();
                }
                else {
                    // we are running on a browser, or using livereload
                    // plugin will not function in this case
                    _this.isInit = true;
                    _this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
                }
            });
        }
    }
    Object.defineProperty(ImageLoader.prototype, "nativeAvailable", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */].installed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isCacheSpaceExceeded", {
        get: function () {
            return this.config.maxCacheSize > -1 && this.currentCacheSize > this.config.maxCacheSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isWKWebView", {
        get: function () {
            return this.platform.is('ios') && window.webkit && window.webkit.messageHandlers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isIonicWKWebView", {
        get: function () {
            return this.isWKWebView && (location.host === 'localhost:8080' || window.LiveReload);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isDevServer", {
        get: function () {
            return (window['IonicDevServer'] != undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "canProcess", {
        /**
         * Check if we can process more items in the queue
         * @returns {boolean}
         */
        get: function () {
            return (this.queue.length > 0
                && this.processing < this.concurrency);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Preload an image
     * @param imageUrl {string} Image URL
     * @returns {Promise<string>} returns a promise that resolves with the cached image URL
     */
    ImageLoader.prototype.preload = function (imageUrl) {
        return this.getImagePath(imageUrl);
    };
    /**
     * Clears the cache
     */
    ImageLoader.prototype.clearCache = function () {
        var _this = this;
        if (!this.platform.is('cordova'))
            return;
        var clear = function () {
            if (!_this.isInit) {
                // do not run this method until our service is initialized
                setTimeout(clear.bind(_this), 500);
                return;
            }
            // pause any operations
            _this.isInit = false;
            _this.file.removeRecursively(_this.file.cacheDirectory, _this.config.cacheDirectoryName)
                .then(function () {
                if (_this.isWKWebView && !_this.isIonicWKWebView) {
                    // also clear the temp files
                    _this.file.removeRecursively(_this.file.tempDirectory, _this.config.cacheDirectoryName)
                        .catch(function (error) {
                        // Noop catch. Removing the tempDirectory might fail,
                        // as it is not persistent.
                    })
                        .then(function () {
                        _this.initCache(true);
                    });
                }
                else {
                    _this.initCache(true);
                }
            })
                .catch(_this.throwError.bind(_this));
        };
        clear();
    };
    /**
     * Gets the filesystem path of an image.
     * This will return the remote path if anything goes wrong or if the cache service isn't ready yet.
     * @param imageUrl {string} The remote URL of the image
     * @returns {Promise<string>} Returns a promise that will always resolve with an image URL
     */
    ImageLoader.prototype.getImagePath = function (imageUrl) {
        var _this = this;
        if (typeof imageUrl !== 'string' || imageUrl.length <= 0) {
            return Promise.reject('The image url provided was empty or invalid.');
        }
        return new Promise(function (resolve, reject) {
            var getImage = function () {
                if (_this.isImageUrlRelative(imageUrl)) {
                    resolve(imageUrl);
                }
                else {
                    _this.getCachedImagePath(imageUrl)
                        .then(resolve)
                        .catch(function () {
                        // image doesn't exist in cache, lets fetch it and save it
                        _this.addItemToQueue(imageUrl, resolve, reject);
                    });
                }
            };
            var check = function () {
                if (_this.isInit) {
                    if (_this.isCacheReady) {
                        getImage();
                    }
                    else {
                        _this.throwWarning('The cache system is not running. Images will be loaded by your browser instead.');
                        resolve(imageUrl);
                    }
                }
                else {
                    setTimeout(function () { return check(); }, 250);
                }
            };
            check();
        });
    };
    /**
     * Returns if an imageUrl is an relative path
     * @param imageUrl
     */
    ImageLoader.prototype.isImageUrlRelative = function (imageUrl) {
        return !/^(https?|file):\/\/\/?/i.test(imageUrl);
    };
    /**
     * Add an item to the queue
     * @param imageUrl
     * @param resolve
     * @param reject
     */
    ImageLoader.prototype.addItemToQueue = function (imageUrl, resolve, reject) {
        this.queue.push({
            imageUrl: imageUrl,
            resolve: resolve,
            reject: reject
        });
        this.processQueue();
    };
    /**
     * Processes one item from the queue
     */
    ImageLoader.prototype.processQueue = function () {
        var _this = this;
        // make sure we can process items first
        if (!this.canProcess)
            return;
        // increase the processing number
        this.processing++;
        // take the first item from queue
        var currentItem = this.queue.splice(0, 1)[0];
        if (this.currentlyProcessing[currentItem.imageUrl] === undefined) {
            this.currentlyProcessing[currentItem.imageUrl] = new Promise(function (resolve, reject) {
                // process more items concurrently if we can
                if (_this.canProcess)
                    _this.processQueue();
                // function to call when done processing this item
                // this will reduce the processing number
                // then will execute this function again to process any remaining items
                var done = function () {
                    _this.processing--;
                    _this.processQueue();
                    if (_this.currentlyProcessing[currentItem.imageUrl] !== undefined) {
                        delete _this.currentlyProcessing[currentItem.imageUrl];
                    }
                };
                var error = function (e) {
                    currentItem.reject();
                    _this.throwError(e);
                    done();
                };
                var localDir = _this.file.cacheDirectory + _this.config.cacheDirectoryName + '/';
                var fileName = _this.createFileName(currentItem.imageUrl);
                _this.http.get(currentItem.imageUrl, {
                    responseType: 'blob',
                    headers: _this.config.httpHeaders
                }).subscribe(function (data) {
                    _this.file.writeFile(localDir, fileName, data, { replace: true }).then(function (file) {
                        if (_this.isCacheSpaceExceeded) {
                            _this.maintainCacheSize();
                        }
                        _this.addFileToIndex(file).then(function () {
                            _this.getCachedImagePath(currentItem.imageUrl).then(function (localUrl) {
                                currentItem.resolve(localUrl);
                                resolve();
                                done();
                                _this.maintainCacheSize();
                            });
                        });
                    }).catch(function (e) {
                        //Could not write image
                        error(e);
                    });
                }, function (e) {
                    //Could not get image via httpClient
                    error(e);
                });
            });
        }
        else {
            //Prevented same Image from loading at the same time
            this.currentlyProcessing[currentItem.imageUrl].then(function () {
                _this.getCachedImagePath(currentItem.imageUrl).then(function (localUrl) {
                    currentItem.resolve(localUrl);
                });
            });
        }
    };
    /**
     * Initialize the cache service
     * @param replace {boolean} Whether to replace the cache directory if it already exists
     */
    ImageLoader.prototype.initCache = function (replace) {
        var _this = this;
        this.concurrency = this.config.concurrency;
        // create cache directories if they do not exist
        this.createCacheDirectory(replace)
            .catch(function (e) {
            _this.throwError(e);
            _this.isInit = true;
        })
            .then(function () { return _this.indexCache(); })
            .then(function () {
            _this.isCacheReady = true;
            _this.isInit = true;
        });
    };
    /**
     * Adds a file to index.
     * Also deletes any files if they are older than the set maximum cache age.
     * @param file {FileEntry} File to index
     * @returns {Promise<any>}
     */
    ImageLoader.prototype.addFileToIndex = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) { return file.getMetadata(resolve, reject); })
            .then(function (metadata) {
            if (_this.config.maxCacheAge > -1
                && (Date.now() - metadata.modificationTime.getTime()) > _this.config.maxCacheAge) {
                // file age exceeds maximum cache age
                return _this.removeFile(file.name);
            }
            else {
                // file age doesn't exceed maximum cache age, or maximum cache age isn't set
                _this.currentCacheSize += metadata.size;
                // add item to index
                _this.cacheIndex.push({
                    name: file.name,
                    modificationTime: metadata.modificationTime,
                    size: metadata.size
                });
                return Promise.resolve();
            }
        });
    };
    /**
     * Indexes the cache if necessary
     * @returns {any}
     */
    ImageLoader.prototype.indexCache = function () {
        var _this = this;
        this.cacheIndex = [];
        return this.file.listDir(this.file.cacheDirectory, this.config.cacheDirectoryName)
            .then(function (files) { return Promise.all(files.map(_this.addFileToIndex.bind(_this))); })
            .then(function () {
            // Sort items by date. Most recent to oldest.
            _this.cacheIndex = _this.cacheIndex.sort(function (a, b) { return a > b ? -1 : a < b ? 1 : 0; });
            _this.indexed = true;
            return Promise.resolve();
        })
            .catch(function (e) {
            _this.throwError(e);
            return Promise.resolve();
        });
    };
    /**
     * This method runs every time a new file is added.
     * It checks the cache size and ensures that it doesn't exceed the maximum cache size set in the config.
     * If the limit is reached, it will delete old images to create free space.
     */
    ImageLoader.prototype.maintainCacheSize = function () {
        var _this = this;
        if (this.config.maxCacheSize > -1 && this.indexed) {
            var maintain_1 = function () {
                if (_this.currentCacheSize > _this.config.maxCacheSize) {
                    // called when item is done processing
                    var next_1 = function () {
                        _this.currentCacheSize -= file_1.size;
                        maintain_1();
                    };
                    // grab the first item in index since it's the oldest one
                    var file_1 = _this.cacheIndex.splice(0, 1)[0];
                    if (typeof file_1 == 'undefined')
                        return maintain_1();
                    // delete the file then process next file if necessary
                    _this.removeFile(file_1.name)
                        .then(function () { return next_1(); })
                        .catch(function () { return next_1(); }); // ignore errors, nothing we can do about it
                }
            };
            maintain_1();
        }
    };
    /**
     * Remove a file
     * @param file {string} The name of the file to remove
     */
    ImageLoader.prototype.removeFile = function (file) {
        var _this = this;
        return this.file
            .removeFile(this.file.cacheDirectory + this.config.cacheDirectoryName, file)
            .then(function () {
            if (_this.isWKWebView && !_this.isIonicWKWebView) {
                return _this.file
                    .removeFile(_this.file.tempDirectory + _this.config.cacheDirectoryName, file)
                    .catch(function () {
                    // Noop catch. Removing the files from tempDirectory might fail, as it is not persistent.
                });
            }
        });
    };
    /**
     * Get the local path of a previously cached image if exists
     * @param url {string} The remote URL of the image
     * @returns {Promise<string>} Returns a promise that resolves with the local path if exists, or rejects if doesn't exist
     */
    ImageLoader.prototype.getCachedImagePath = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // make sure cache is ready
            if (!_this.isCacheReady) {
                return reject();
            }
            // if we're running with livereload, ignore cache and call the resource from it's URL
            if (_this.isDevServer) {
                return resolve(url);
            }
            // get file name
            var fileName = _this.createFileName(url);
            // get full path
            var dirPath = _this.file.cacheDirectory + _this.config.cacheDirectoryName, tempDirPath = _this.file.tempDirectory + _this.config.cacheDirectoryName;
            // check if exists
            _this.file.resolveLocalFilesystemUrl(dirPath + '/' + fileName)
                .then(function (fileEntry) {
                // file exists in cache
                if (_this.config.imageReturnType === 'base64') {
                    // read the file as data url and return the base64 string.
                    // should always be successful as the existence of the file
                    // is alreay ensured
                    _this.file
                        .readAsDataURL(dirPath, fileName)
                        .then(function (base64) {
                        base64 = base64.replace('data:null', 'data:*/*');
                        resolve(base64);
                    })
                        .catch(reject);
                }
                else if (_this.config.imageReturnType === 'uri') {
                    // now check if iOS device & using WKWebView Engine.
                    // in this case only the tempDirectory is accessible,
                    // therefore the file needs to be copied into that directory first!
                    if (_this.isIonicWKWebView) {
                        // Use Ionic normalizeUrl to generate the right URL for Ionic WKWebView
                        resolve(Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* normalizeURL */])(fileEntry.nativeURL));
                    }
                    else if (_this.isWKWebView) {
                        // check if file already exists in temp directory
                        _this.file.resolveLocalFilesystemUrl(tempDirPath + '/' + fileName)
                            .then(function (tempFileEntry) {
                            // file exists in temp directory
                            // return native path
                            resolve(tempFileEntry.nativeURL);
                        })
                            .catch(function () {
                            // file does not yet exist in the temp directory.
                            // copy it!
                            _this.file.copyFile(dirPath, fileName, tempDirPath, fileName)
                                .then(function (tempFileEntry) {
                                // now the file exists in the temp directory
                                // return native path
                                resolve(tempFileEntry.nativeURL);
                            })
                                .catch(reject);
                        });
                    }
                    else {
                        // return native path
                        resolve(fileEntry.nativeURL);
                    }
                }
            })
                .catch(reject); // file doesn't exist
        });
    };
    /**
     * Throws a console error if debug mode is enabled
     * @param args {any[]} Error message
     */
    ImageLoader.prototype.throwError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.config.debugMode) {
            args.unshift('ImageLoader Error: ');
            console.error.apply(console, args);
        }
    };
    /**
     * Throws a console warning if debug mode is enabled
     * @param args {any[]} Error message
     */
    ImageLoader.prototype.throwWarning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.config.debugMode) {
            args.unshift('ImageLoader Warning: ');
            console.warn.apply(console, args);
        }
    };
    /**
     * Check if the cache directory exists
     * @param directory {string} The directory to check. Either this.file.tempDirectory or this.file.cacheDirectory
     * @returns {Promise<boolean|FileError>} Returns a promise that resolves if exists, and rejects if it doesn't
     */
    ImageLoader.prototype.cacheDirectoryExists = function (directory) {
        return this.file.checkDir(directory, this.config.cacheDirectoryName);
    };
    /**
     * Create the cache directories
     * @param replace {boolean} override directory if exists
     * @returns {Promise<DirectoryEntry|FileError>} Returns a promise that resolves if the directories were created, and rejects on error
     */
    ImageLoader.prototype.createCacheDirectory = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        var cacheDirectoryPromise, tempDirectoryPromise;
        if (replace) {
            // create or replace the cache directory
            cacheDirectoryPromise = this.file.createDir(this.file.cacheDirectory, this.config.cacheDirectoryName, replace);
        }
        else {
            // check if the cache directory exists.
            // if it does not exist create it!
            cacheDirectoryPromise = this.cacheDirectoryExists(this.file.cacheDirectory)
                .catch(function () { return _this.file.createDir(_this.file.cacheDirectory, _this.config.cacheDirectoryName, false); });
        }
        if (this.isWKWebView && !this.isIonicWKWebView) {
            if (replace) {
                // create or replace the temp directory
                tempDirectoryPromise = this.file.createDir(this.file.tempDirectory, this.config.cacheDirectoryName, replace);
            }
            else {
                // check if the temp directory exists.
                // if it does not exist create it!
                tempDirectoryPromise = this.cacheDirectoryExists(this.file.tempDirectory)
                    .catch(function () { return _this.file.createDir(_this.file.tempDirectory, _this.config.cacheDirectoryName, false); });
            }
        }
        else {
            tempDirectoryPromise = Promise.resolve();
        }
        return Promise.all([cacheDirectoryPromise, tempDirectoryPromise]);
    };
    /**
     * Creates a unique file name out of the URL
     * @param url {string} URL of the file
     * @returns {string} Unique file name
     */
    ImageLoader.prototype.createFileName = function (url) {
        // hash the url to get a unique file name
        return this.hashString(url).toString() + (this.config.fileNameCachedWithExtension ? this.getExtensionFromFileName(url) : '');
    };
    /**
     * Converts a string to a unique 32-bit int
     * @param string {string} string to hash
     * @returns {number} 32-bit int
     */
    ImageLoader.prototype.hashString = function (string) {
        var hash = 0, char;
        if (string.length === 0)
            return hash;
        for (var i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    };
    /**
     * extract extension from filename or url
     *
     * @param filename
     * @returns {string}
     */
    ImageLoader.prototype.getExtensionFromFileName = function (filename) {
        return filename.substr((~-filename.lastIndexOf('.') >>> 0) + 1) || this.config.fallbackFileNameCachedExtension;
    };
    return ImageLoader;
}());

ImageLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
ImageLoader.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__image_loader_config__["a" /* ImageLoaderConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], },
    { type: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], },
]; };
//# sourceMappingURL=image-loader.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_image_loader__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__ = __webpack_require__(531);



var propMap = {
    display: 'display',
    height: 'height',
    width: 'width',
    backgroundSize: 'background-size',
    backgroundRepeat: 'background-repeat'
};
var ImgLoader = (function () {
    function ImgLoader(_element, _renderer, _imageLoader, _config) {
        this._element = _element;
        this._renderer = _renderer;
        this._imageLoader = _imageLoader;
        this._config = _config;
        /**
         * Fallback URL to load when the image url fails to load or does not exist.
         */
        this.fallbackUrl = this._config.fallbackUrl;
        /**
         * Whether to show a spinner while the image loads
         */
        this.spinner = this._config.spinnerEnabled;
        /**
         * Whether to show the fallback image instead of a spinner while the image loads
         */
        this.fallbackAsPlaceholder = this._config.fallbackAsPlaceholder;
        /**
         * Enable/Disable caching
         * @type {boolean}
         */
        this.cache = true;
        /**
         * Width of the image. This will be ignored if using useImg.
         */
        this.width = this._config.width;
        /**
         * Height of the image. This will be ignored if using useImg.
         */
        this.height = this._config.height;
        /**
         * Display type of the image. This will be ignored if using useImg.
         */
        this.display = this._config.display;
        /**
         * Background size. This will be ignored if using useImg.
         */
        this.backgroundSize = this._config.backgroundSize;
        /**
         * Background repeat. This will be ignored if using useImg.
         */
        this.backgroundRepeat = this._config.backgroundRepeat;
        /**
         * Name of the spinner
         */
        this.spinnerName = this._config.spinnerName;
        /**
         * Color of the spinner
         */
        this.spinnerColor = this._config.spinnerColor;
        /**
         * Notify on image load..
         */
        this.load = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Indicates if the image is still loading
         * @type {boolean}
         */
        this.isLoading = true;
        this._useImg = this._config.useImg;
    }
    Object.defineProperty(ImgLoader.prototype, "src", {
        get: function () {
            return this._src;
        },
        /**
         * The URL of the image to load.
         */
        set: function (imageUrl) {
            this._src = this.processImageUrl(imageUrl);
            this.updateImage(this._src);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ImgLoader.prototype, "useImg", {
        /**
         * Use <img> tag
         */
        set: function (val) {
            this._useImg = val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgLoader.prototype, "noCache", {
        /**
         * Convenience attribute to disable caching
         * @param val
         */
        set: function (val) {
            this.cache = val !== false;
        },
        enumerable: true,
        configurable: true
    });
    ImgLoader.prototype.ngOnInit = function () {
        if (this.fallbackAsPlaceholder && this.fallbackUrl) {
            this.setImage(this.fallbackUrl, false);
        }
        if (!this.src) {
            // image url was not passed
            // this can happen when [src] is set to a variable that turned out to be undefined
            // one example could be a list of users with their profile pictures
            // in this case, it would be useful to use the fallback image instead
            // if fallbackUrl was used as placeholder we do not need to set it again
            if (!this.fallbackAsPlaceholder && this.fallbackUrl) {
                // we're not going to cache the fallback image since it should be locally saved
                this.setImage(this.fallbackUrl);
            }
            else {
                this.isLoading = false;
            }
        }
    };
    ImgLoader.prototype.updateImage = function (imageUrl) {
        var _this = this;
        this._imageLoader.getImagePath(imageUrl)
            .then(function (imageUrl) { return _this.setImage(imageUrl); })
            .catch(function (error) { return _this.setImage(_this.fallbackUrl || imageUrl); });
    };
    /**
     * Gets the image URL to be loaded and disables caching if necessary
     * @returns {string}
     */
    ImgLoader.prototype.processImageUrl = function (imageUrl) {
        if (this.cache === false) {
            // need to disable caching
            if (imageUrl.indexOf('?') === -1) {
                imageUrl += '?';
            }
            if (['&', '?'].indexOf(imageUrl.charAt(imageUrl.length)) === -1) {
                imageUrl += '&';
            }
            // append timestamp at the end to make URL unique
            imageUrl += 'cache_buster=' + Date.now();
        }
        return imageUrl;
    };
    /**
     * Set the image to be displayed
     * @param imageUrl {string} image src
     * @param stopLoading {boolean} set to true to mark the image as loaded
     */
    ImgLoader.prototype.setImage = function (imageUrl, stopLoading) {
        var _this = this;
        if (stopLoading === void 0) { stopLoading = true; }
        this.isLoading = !stopLoading;
        if (this._useImg) {
            // Using <img> tag
            if (!this.element) {
                // create img element if we dont have one
                this.element = this._renderer.createElement(this._element.nativeElement, 'img');
            }
            // set it's src
            this._renderer.setElementAttribute(this.element, 'src', imageUrl);
            if (this.fallbackUrl && !this._imageLoader.nativeAvailable) {
                this._renderer.listen(this.element, 'error', function () { return _this._renderer.setElementAttribute(_this.element, 'src', _this.fallbackUrl); });
            }
        }
        else {
            // Not using <img> tag
            this.element = this._element.nativeElement;
            for (var prop in propMap) {
                if (this[prop]) {
                    this._renderer.setElementStyle(this.element, propMap[prop], this[prop]);
                }
            }
            this._renderer.setElementStyle(this.element, 'background-image', 'url(\'' + (imageUrl || this.fallbackUrl) + '\')');
        }
        this.load.emit(this);
    };
    return ImgLoader;
}());

ImgLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */], args: [{
                selector: 'img-loader',
                template: '<ion-spinner *ngIf="spinner && isLoading && !fallbackAsPlaceholder" [name]="spinnerName" [color]="spinnerColor"></ion-spinner>' +
                    '<ng-content></ng-content>',
                styles: ['ion-spinner { float: none; margin-left: auto; margin-right: auto; display: block; }']
            },] },
];
/** @nocollapse */
ImgLoader.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__providers_image_loader__["a" /* ImageLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__["a" /* ImageLoaderConfig */], },
]; };
ImgLoader.propDecorators = {
    'fallbackUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['fallback',] },],
    'spinner': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'fallbackAsPlaceholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'cache': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'backgroundSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'backgroundRepeat': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'spinnerName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'spinnerColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'load': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
    'src': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'useImg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'noCache': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
};
//# sourceMappingURL=img-loader.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_loader_module__ = __webpack_require__(536);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__image_loader_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_img_loader__ = __webpack_require__(533);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__ = __webpack_require__(531);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_loader__ = __webpack_require__(532);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicImageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_img_loader__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_loader_config__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(148);







var IonicImageLoader = (function () {
    function IonicImageLoader() {
    }
    IonicImageLoader.forRoot = function () {
        return {
            ngModule: IonicImageLoader,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_image_loader_config__["a" /* ImageLoaderConfig */],
                __WEBPACK_IMPORTED_MODULE_2__providers_image_loader__["a" /* ImageLoader */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]
            ]
        };
    };
    return IonicImageLoader;
}());

IonicImageLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__components_img_loader__["a" /* ImgLoader */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */],
                    __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__components_img_loader__["a" /* ImgLoader */]
                ]
            },] },
];
/** @nocollapse */
IonicImageLoader.ctorParameters = function () { return []; };
//# sourceMappingURL=image-loader.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var first_1 = __webpack_require__(538);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var first_1 = __webpack_require__(287);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return first_1.first(predicate, resultSelector, defaultValue)(this);
}
exports.first = first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantsPage = /** @class */ (function () {
    function PlantsPage(navCtrl, database, api, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.Object = Object;
        this.database.query('plant', '').then(function (res) {
            _this.plants = res.docs;
        });
        this.filters = {
            cycle: '',
            stratum: '',
        };
        // this.populate();
    }
    PlantsPage.prototype.search = function (ev) {
        var _this = this;
        var val = '';
        if (ev) {
            val = ev.target.value;
        }
        this.database.query('plant', val, this.filters).then(function (res) {
            _this.plants = res.docs;
        });
    };
    /**
     * Prompt the user to add a new item. This shows our PlantFormPage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    PlantsPage.prototype.add = function () {
        this.navCtrl.push('PlantFormPage');
    };
    /**
     * Navigate to the detail page for this item.
     */
    PlantsPage.prototype.open = function (id) {
        this.navCtrl.push('PlantPage', {
            id: id
        });
    };
    PlantsPage.prototype.populate = function () {
        var arr = [
            {
                "id": 0,
                "slug": "abobora",
                "nome": "Abóbora",
                "nome_popular": "Abóbora",
                "nome_cientifico": "Cucurbita moschata Duch.",
                "descricao": "É uma cultura tipicamente tropical com frutos ricos em vitamina A. Também fornece vitaminas do complexo B, cálcio e fósforo. Na mesma planta encontram-se flores femininas (que originam os frutos) e masculinas (que fornecem o pólen). Para boa produtividade e frutos sem deformações, é necessária a presença de abelhas para a polinização. Os tipos mais encontrados são: seca (frutos grandes), baianinha (casca rajada) e japonesa ou cabotiá (casca verde-escuro). No caso das abóboras híbridas (cabotiá), para o pegamento dos frutos, é preciso que outra espécie, plantada 15 dias antes do híbrido, forneça o pólen ou seja aplicado hormônio sintético nas flores.",
                "epoca_regiao": "É favorecida por temperaturas elevadas. Tolera temperaturas amenas (entre 15° e 25°C), mas não resiste a geadas. Dias curtos, com menor exposição do Sol, favorecem a floração feminina, resultando em maior produtividade. Em regiões de inverno suave, é possível plantar o ano todo, desde que haja irrigação.",
                "plantio": {
                    "Sul": "out-fev",
                    "Sudeste": "set-mar",
                    "Nordeste": "mar-out",
                    "Centro-oeste": "ano todo",
                    "Norte": "abr-ago"
                },
                "colheita": "90-120",
                "companheiras": "Alface, Chaga, Feijão, Manjericão, Melão, Milho",
                "aproveitamento": "É consumida em saladas, cozidos, refogados, sopas, purês, pães, bolos, pudins e doces. As sementes são ricas em ferro e podem ser torradas e consumidas como aperitivo. São também vermicidas. Tem-se observado um crescimento na venda da abóbora já processada (cortada e embalada) e de sementes já torradas e salgadas."
            },
            {
                "id": 1,
                "slug": "abobrinha",
                "nome": "Abobrinha",
                "nome_popular": "Abobrinha italiana, a,bobrinha verde, abobrinha",
                "nome_cientifico": "Cucurbita pepo L.",
                "descricao": "Seus frutos são de fácil digestão, ricos em niacina, e fonte de vitaminas do complexo B. As abobrinhas são produzidas de forma semelhante à abóbora, mas são colhidas ainda imaturas (verdes). Podem ser semeadas diretamente no local de plantio ou em bandejas para transplante. Mas cuidado: são sensíveis ao transplantio, já que suas raízes não se recuperam depois de danificadas. A cultura é sensível ao excesso de água no solo. O início da colheita dependerá da cultivar escolhida e do ponto de maturação exigido pelo consumidor.",
                "epoca_regiao": "Desenvolve-se melhor sob temperaturas amenas (entre 15° e 25°C). Temperaturas elevadas podem prejudicar a polinização. Não tolera geadas.",
                "plantio": {
                    "Sul": "set-mai",
                    "Sudeste": "ago-mai",
                    "Nordeste": "mar-out",
                    "Centro-oeste": "ano todo",
                    "Norte": "abr-ago"
                },
                "colheita": "45-60",
                "companheiras": "Alface, Chaga, Feijão, Manjericão, Melão, Milho",
                "aproveitamento": "A abobrinha pode ser consumida refogada no óleo ou azeite, cozida, em saladas frias, como suflê, frita à milanesa, recheada ou como ingrediente em bolos, pizza e pastelões. Seu cozimento é rápido e não é necessário acrescentar água, pois a água da abobrinha é suficiente para cozinhá-la. É comercializada em caixas plásticas e vendida ao consumidor final a granel ou em bandejas, com os frutos inteiros ou já cortados."
            },
            {
                "id": 2,
                "slug": "acelga",
                "nome": "Acelga",
                "nome_popular": "Acelga",
                "nome_cientifico": "Beta vulgaris L. var. cicla",
                "descricao": "A acelga é da mesma família da beterraba e se diferencia pelo grande desenvolvimento das folhas e do talo, que são as partes comestíveis. Rica em fibras e vitaminas A e C, além de ser fonte de sais minerais como cálcio e ferro. A semeadura é feita em bandejas para a produção de mudas ou diretamente no canteiro, sendo necessário o raleio (eliminação das plantas em excesso) nesse último caso. O ciclo pode prolongar-se por cerca de 100 dias, sendo que a colheita inicia-se entre 60 – 70 dias após o plantio.",
                "epoca_regiao": "Desenvolve-se melhor sob temperaturas amenas (entre 15° e 25°C), sendo plantadas geralmente nos períodos de outono e inverno em regiões de baixa altitude. Em regiões mais altas, com verão suave, pode-se plantar durante todo o ano.",
                "plantio": {
                    "Sul": "fev-jul",
                    "Sudeste": "fev-jul",
                    "Nordeste": "*",
                    "Centro-oeste": "*",
                    "Norte": "abr-jun"
                },
                "colheita": "60-70",
                "companheiras": "Cebola, Cenoura, Couve, Feijão",
                "aproveitamento": "Pode ser consumida crua, em saladas, e refogada como a couve. É vendida em maços, e os caules podem ser consumidos fritos ou cozidos em sopas."
            },
            {
                "id": 3,
                "slug": "agriao",
                "nome": "Agrião",
                "nome_popular": "Agrião",
                "nome_cientifico": "Nasturtium officinale sp.",
                "descricao": "É uma planta semiperene, podendo ser plantada em água ou em terra seca. É uma hortaliça folhosa, rica em vitamina C e em sais minerais, como o ferro. Seus talos são ricos em iodo. É semeada em bandejas ou em sementeiras, sendo posteriormente transplantada para o local definitivo. As estacas retiradas de culturas adultas também podem ser utilizadas para o plantio. A colheita pode ser feita quando as folhas já têm um bom tamanho, podendo ser repetida por quatro vezes ou mais. O primeiro corte se dá por volta de 60 dias após o plantio.",
                "epoca_regiao": "Desenvolve-se melhor sob temperaturas amenas (entre 15° e 25°C), sendo plantado geralmente nos períodos de outono e inverno. Onde o verão não é muito quente, pode ser plantado o ano inteiro.",
                "plantio": {
                    "Sul": "fev-out",
                    "Sudeste": "fev-jul",
                    "Nordeste": "mar-set",
                    "Centro-oeste": "mar-jul",
                    "Norte": "abr-jul"
                },
                "colheita": "60-70",
                "companheiras": "Rabanete",
                "aproveitamento": "Pode ser usado cru, em saladas, molhos, pães, sopas e cozidos. Também é utilizado com mel na medicina popular para curar tosse e bronquite. É vendido em maços ou minimamente processado, já desinfetado, em embalagens com outras hortaliças."
            },
            {
                "id": 4,
                "slug": "alcachofra",
                "nome": "Alcachofra",
                "nome_popular": "Alcachofra",
                "nome_cientifico": "Cynara scolymus L.",
                "descricao": "A parte comestível é o botão floral. É fonte de vitamina C, ácido fólico, magnésio e potássio. É uma cultura perene, plantada por brotos retirados de plantas selecionadas. As mudas devem ter uma parte subterrânea que contenha algumas raízes e a parte aérea com 5 a 7 folhas. De cada planta são colhidos cerca de 20 botões.",
                "epoca_regiao": "A cultura exige frio para se desenvolver bem, mas é sensível a geada.",
                "plantio": {
                    "Sul": "fev-mar",
                    "Sudeste": "fev-mar",
                    "Nordeste": "*",
                    "Centro-oeste": "*",
                    "Norte": "*"
                },
                "colheita": "180-200",
                "companheiras": "Girassol, estragão",
                "aproveitamento": "As flores são consumidas cozidas. Deve-se retirar a parte fibrosa central de cada alcachofra, isto é, os “espinhos”. Pode acompanhar carnes ou compor molhos e tortas."
            },
            {
                "id": 5,
                "slug": "alface",
                "nome": "Alface",
                "nome_popular": "Alface",
                "nome_cientifico": "Lactuca sativa L.",
                "descricao": "É uma hortaliça de folhas comestíveis. As folhas podem ser lisas ou crespas, com ou sem formação de cabeça. Também existem alfaces com folhas roxas ou folhas bem recortadas. É uma importante fonte de sais minerais, principalmente de cálcio e de vitaminas, especialmente a vitamina A. A alface deve ser colhida antes do início do pendoamento (emissão do pendão floral), momento em que as folhas começam a apresentar um sabor amargo característico. O plantio em local definitivo é feito por mudas semeadas em bandejas ou copinhos.",
                "epoca_regiao": "Pode ser cultivada durante o ano todo, em todas as regiões do Brasil, a depender da cultivar escolhida, já que existem variedades adaptadas a climas mais quentes e outras para plantio em regiões de clima ameno.",
                "plantio": {
                    "Sul": "ano todo",
                    "Sudeste": "ano todo",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ano todo",
                    "Norte": "ano todo"
                },
                "colheita": "50–70",
                "companheiras": "Abóbora, Aipo, Alcachofra, Alho-Francê, Beterraba, Cebola, Cenoura, Couve, Couve-Flor, Ervilha, Feijão, Morango, Pepino, Picle, Rabanete, Repolho, Tomate",
                "aproveitamento": "Todas as folhas podem ser aproveitadas. As alfaces roxa e verde são consumidas predominantemente em saladas frescas. A alface americana é mais crocante e, além de seu uso em saladas, é indicada para o preparo de sanduíches por ser mais resistente ao calor. Podem ser limpas e embaladas em agroindústria, sendo vendidas já prontas para consumo."
            },
            {
                "id": 6,
                "slug": "alho",
                "nome": "Alho",
                "nome_popular": "Alho",
                "nome_cientifico": "Allium sativum L.",
                "descricao": "O alho é um condimento mundialmente utilizado na culinária, sendo uma cultura muito antiga. É rico em vitaminas do complexo B e contém expressiva quantidade de fósforo. O bulbo contém bulbilhos (dentes) capazes de originar uma nova planta após brotação. A planta necessita de dias longos e frios para formar o bulbo. Visando induzir a formação de bulbos, foi desenvolvida a técnica de vernalização (expor os bulbos ao frio em câmara fria), sendo essa prática útil para algumas cultivares.",
                "epoca_regiao": "A escolha da cultivar adequada ao clima da região é essencial para o sucesso da cultura. As cultivares de ciclo curto ou precoces são menos exigentes de temperaturas frias e de quantidade de horas diárias de luz. As de ciclo mediano são um pouco mais exigentes de frio e horas de luz, enquanto as cultivares tardias exigem, no mínimo, 13 horas de luz por dia, podendo ser plantadas no extremo sul do Brasil ou no centro-sul, somente após a vernalização dos bulbos.",
                "plantio": {
                    "Sul": "mai-jun",
                    "Sudeste": "mar-abr",
                    "Nordeste": "mai-mai",
                    "Centro-oeste": "mar-abr",
                    "Norte": "*"
                },
                "colheita": "150–180",
                "companheiras": "Aipo, Alface, Beterraba, Cenoura, Couve, Morango, Pepino, Picle, Tomate",
                "aproveitamento": "Pode ser usado na fabricação de molhos, pastas e temperos prontos pela agroindústria. O alho também tem sido vendido na forma de chips e frito, pronto para o consumo. É utilizado para temperar grande parte dos alimentos preparados em casa: sopas, arroz, feijão, carnes, molhos e massas."
            },
            {
                "id": 7,
                "slug": "alho-porro",
                "nome": "Alho-porro",
                "nome_popular": "Alho-porro",
                "nome_cientifico": "Allium ampeloprasum L.",
                "descricao": "A planta lembra o alho, porém é maior, com folhas mais largas e alongadas, de cor verde-escura. Apresenta consideráveis teores de vitaminas A, B e C. Produz melhor em solos de textura média (entre argiloso e arenoso), solto e leve. O plantio por mudas é o mais indicado, transplantando-se as mudas quando atingirem cerca de 12 centímetros de altura. Um trato cultural recomendado é a amontoa, que é a chegada de terra junto às plantas para provocar a produção de longas hastes brancas (na verdade, folhas modificadas).",
                "epoca_regiao": "É planta típica de frio e deve ser plantada nos períodos de outono e inverno.",
                "plantio": {
                    "Sul": "mar-jun",
                    "Sudeste": "mar-jun",
                    "Nordeste": "mai-jun",
                    "Centro-oeste": "abr-jun",
                    "Norte": "*"
                },
                "colheita": "90-20",
                "companheiras": "Aipo, Alface, Batata, Beterraba, Cebola, Cenoura, Couve, Espinafre, Morango, Tomate",
                "aproveitamento": "No Brasil, ainda é pouco usado na culinária, porém seu uso tem aumentado nas agroindústrias para produção de sopas desidratadas. Pode ser usado em saladas, para temperar carnes e pratos finos, além de sopas. Deve ser manuseado com cuidado para evitar escurecimento do talo."
            },
            {
                "id": 8,
                "slug": "almeirao",
                "nome": "Almeirão",
                "nome_popular": "Almeirão ou chicória ama,rga",
                "nome_cientifico": "Cichorium intybus L.",
                "descricao": "Suas folhas são alongadas, em forma de lança e constituem a parte comestível. Fornece vitaminas A, C e do complexo B, sendo boa fonte de fósforo e ferro. Deve ser plantado diretamente no campo, pois suas raízes não suportam o transplante. As plantinhas em excesso devem ser eliminadas, obedecendo ao espaçamento de 15 a 20 centímetros entre as plantas. É uma cultura bastante exigente em água, portanto, deve-se irrigar bem e com frequência.",
                "epoca_regiao": "Produz melhor sob temperaturas amenas (entre 15° e 25°C), sendo plantado geralmente nas estações de outono e inverno.",
                "plantio": {
                    "Sul": "fev-out",
                    "Sudeste": "fev-ago",
                    "Nordeste": "fev-ago",
                    "Centro-oeste": "fev-ago",
                    "Norte": "abr-ago"
                },
                "colheita": "60-70",
                "companheiras": "Abóbora",
                "aproveitamento": "Pode ser consumido cru em saladas ou refogado como a couve, podendo substituí-la. Também pode ser usado no preparo de tortas, bolinhos e sopas ou como acompanhamento do arroz e feijão. É vendido em maços de folhas."
            },
            {
                "id": 9,
                "slug": "batata",
                "nome": "Batata",
                "nome_popular": "Batata",
                "nome_cientifico": "Solanum tuberosum ssp. tuberosum",
                "descricao": "Originária dos Andes, a batateira produz caules modificados (tubérculos) ricos em carboidratos, muito utilizados na alimentação humana. A batata também é fonte importante de fósforo e vitaminas do grupo B. O tubérculo com brotações é a estrutura usada para plantio das lavouras de batata para consumo. Adapta-se melhor a solos arenosos, arejados e bem drenados, o que dificulta o aparecimento de doenças. A colheita é feita quando as ramas já estão secando e tombando.",
                "epoca_regiao": "No centro-sul, pode-se plantar o ano inteiro. Entretanto, os plantios de inverno e primavera são melhores que os de verão, pois a cultura se desenvolve melhor sob temperaturas amenas (entre 15° e 25°C), sofrendo menor incidência de doenças. Temperaturas altas noturnas (acima de 20°C) por mais de 60 dias inviabiliza a produção de tubérculos.",
                "plantio": {
                    "Sul": "nov-dez",
                    "Sudeste": "abr-mai",
                    "Nordeste": "*",
                    "Centro-oeste": "abr-mai",
                    "Norte": "*"
                },
                "colheita": "90-120",
                "companheiras": "Aipo, Ervilha, Espinafre, Feijão, Nasturtium, Rabanete, Repolho",
                "aproveitamento": "A batata é uma hortaliça consumida em todo o mundo, das mais diversas formas. Acompanha carnes, peixes e aves, podendo ser cozida, assada ou frita. É utilizada na forma de purês, em massas (nhoque), salgados, tortas e sopas. Ultimamente tem-se observado crescimento na venda da batata já processada (cortada e embalada) juntamente com outras hortaliças, como chuchu e cenoura, para o preparo de sopas e maioneses."
            },
            {
                "id": 10,
                "slug": "batata-doce",
                "nome": "Batata-doce",
                "nome_popular": "Batata-doce",
                "nome_cientifico": "Ipomoea batatas L.",
                "descricao": "A batata-doce é originária de regiões tropicais da América do Sul, sendo suas raízes tuberosas as partes de maior interesse para alimentação, por serem ricas em amido e açúcares. A polpa e a casca possuem cores que variam de branco ao roxo, passando pelo creme e alaranjado. É uma cultura rústica, pouco exigente em nutrientes e água, porém requer um bom preparo do solo (aração e gradagem). Adapta-se melhor a solos arenosos e arejados. A propagação pode ser feita pela própria batata-doce brotada, pelos brotos destacados da batata, ramas velhas e ramas novas, sendo esta última a forma que fornece melhor resultado. Enterram-se de 3 a 4 entrenós (espaço entre dois nós de tronco ou caule) da rama, deixando a ponteira com as folhas para fora da terra. A colheita deve preferencialmente ser feita com a terra seca, quando as raízes atingirem o tamanho desejado.",
                "epoca_regiao": "A cultura da batata-doce se desenvolve bem em temperaturas mais elevadas. O frio pode reduzir a produtividade e aumentar o ciclo da cultura. Não tolera geadas. Em regiões de baixa altitude, com inverno suave, é possível plantar durante todo o ano.",
                "plantio": {
                    "Sul": "out-dez",
                    "Sudeste": "out-dez",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "out-dez",
                    "Norte": "ano todo"
                },
                "colheita": "120-150",
                "companheiras": "tomate",
                "aproveitamento": "A batata-doce pode se consumida cozida, assada ou frita, acompanhando diversos pratos. Até os brotos e folhas podem ser consumidos, refogados ou em sopas. Na indústria, a batata-doce é matéria-prima para fabricação de álcool, farinha (amido), pães e doces. As raízes e ramas também podem ser usadas na alimentação animal."
            },
            {
                "id": 11,
                "slug": "berinjela",
                "nome": "Berinjela",
                "nome_popular": "Berinjela",
                "nome_cientifico": "Solanum melongena L.",
                "descricao": "É uma planta arbustiva, resistente e vigorosa. Produzem frutos roxo-escuros ou quase negros. É rica em vitamina A, B1, B2, B5, C, potássio, fósforo, cloro, cálcio, sódio, ferro, magnésio e enxofre. O plantio é realizado via semente, em bandejas com posterior transplantio para o campo.",
                "epoca_regiao": "É uma planta de clima quente, sendo favorecida pelo calor, principalmente para a germinação, emergência e formação da muda.",
                "plantio": {
                    "Sul": "ago-jan",
                    "Sudeste": "ago-mar",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ago-fev",
                    "Norte": "abr-ago"
                },
                "colheita": "100-120",
                "companheiras": "Ervilha, Estragão, Feijão, Pimenta, Salsa, Tomate, Tomilho ",
                "aproveitamento": "Pode ser consumida cozida, em pratos frios ou quentes, e frita à milanesa em fatias finas. Também pode ser ingrediente no preparo de patês, molhos, recheada, omelete e muitos outros pratos. Seu suco é diurético, diminui o colesterol e reduz a ação das gorduras sobre o fígado."
            },
            {
                "id": 12,
                "slug": "bertalha",
                "nome": "Bertalha",
                "nome_popular": "Bertalha, bretalha, couve-de-cerca, joão-gomes, espinafre-indiano (Ásia), folhatartaruga (África)",
                "nome_cientifico": "Basella alba e Basella rubra",
                "descricao": "A bertalha é uma hortaliça trepadeira, de folhas suculentas, brilhantes e de formato ovalado ou de coração. É uma boa fonte de vitaminas A e C, além de cálcio, ferro e fósforo. A cultura prefere solos arenosos e ricos em matéria orgânica. As sementes devem permanecer 24 horas de molho em água antes da semeadura, para quebrar a dormência. A propagação é feita por sementes plantadas em sementeiras ou bandejas para posterior transplante ou por ramos plantados diretamente no canteiro. O transplante das mudas é feito 20 dias após a germinação. A planta pode ser tutorada (apoiada com estacas e arame) ou, dependendo da variedade, a lavoura pode ser conduzida de forma rasteira, com cortes sucessivos Colhem-se os ramos terminais quando atingem de 40 a 50 centímetros.",
                "epoca_regiao": "Desenvolve-se melhor em regiões ensolaradas e com temperaturas mais elevadas. Chuvas abundantes e bem distribuídas favorecem a cultura. Não tolera geadas.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "set-fev",
                    "Nordeste": "set-fev",
                    "Centro-oeste": "ano todo",
                    "Norte": "ano todo"
                },
                "colheita": "60-70",
                "companheiras": "",
                "aproveitamento": "A bertalha pode substituir a couve ou o espinafre. Suas folhas e ramos podem ser consumidos crus em saladas, ou cozidos em sopas, refogados e recheios de tortas, panquecas e de outros pratos. Os ramos são comercializados em maços."
            },
            {
                "id": 13,
                "slug": "beterraba",
                "nome": "Beterraba",
                "nome_popular": "Beterraba",
                "nome_cientifico": "Beta vulgaris L.",
                "descricao": "É uma hortaliça bastante consumida no Brasil, cuja parte tuberosa tem sabor doce e coloração roxa. É fonte de sais minerais, principalmente ferro, e açúcar. Deve-se quebrar a dormência das sementes colocando-as de molho por 24 horas antes da semeadura e lavando-as em seguida. Pode ser plantada via semente em local definitivo ou em bandejas e sementeiras para posterior transplante, quando tiverem 4 a 5 folhas. Para produzir sementes, a cultura deve passar por um período de frio intenso.",
                "epoca_regiao": "Desenvolve-se melhor sob temperaturas amenas (entre 15° e 25°C) ou baixas e resiste ao frio e geadas. Não tolera temperaturas e umidade muito elevadas.",
                "plantio": {
                    "Sul": "ano todo",
                    "Sudeste": "ano todo",
                    "Nordeste": "abr-ago",
                    "Centro-oeste": "abr-ago",
                    "Norte": "*"
                },
                "colheita": "60-70",
                "companheiras": "Aipo, Alface, Alho, Cebola, Couve, Feijão-Rateiro, Morango, Pepino, Rabanete, Rábano, Repolho",
                "aproveitamento": "A raiz deve ser preferencialmente consumida crua e ralada, na forma de salada ou em sucos. Também pode ser consumida cozida, em sopas, em sucos e no preparo de bolos e suflês. Pode ser comercializada, já embalada, na forma minimamente processada (cubos, ralada, em rodelas). As folhas também podem ser consumidas, refogadas como couve ou em omeletes e bolinhos, sopas."
            },
            {
                "id": 14,
                "slug": "brocolis",
                "nome": "Brócolis ou couve-brócolos",
                "nome_popular": "Brócolis, brócoli, brócolos ou couve-brócolos",
                "nome_cientifico": "Brassica oleracea L. var. italica Plenck",
                "descricao": "Planta verde escura da mesma família da couve, da couve-flor, do repolho e do agrião (brassicacea). Produz inflorescências (conjunto de flores) comestíveis. Podem ser do tipo “cabeça”, ou do tipo “ramoso”. É fonte de vitamina C, A, cálcio, ferro, fósforo e fibras. É uma cultura exigente em adubação de micronutrientes, especialmente boro e molibdênio. A colheita deve ser feita quando os botões florais estão bem desenvolvidos, ainda com coloração verde-escuro, mas antes da abertura das flores.",
                "epoca_regiao": "Já existem cultivares adaptadas a clima mais quente. A escolha da cultivar ideal, em relação ao clima da região e altitude, é fundamental. Para fazer a melhor escolha, o produtor deve consultar o catálogo de cultivares da espécie.",
                "plantio": {
                    "Sul": "out-dez",
                    "Sudeste": "set-jan",
                    "Nordeste": "out-fev",
                    "Centro-oeste": "out-jan",
                    "Norte": "abr-jul"
                },
                "colheita": "80-100",
                "companheiras": "Alecrim, Chaga, Salsa, Sálvia, Tomate",
                "aproveitamento": "O brócolis pode ser consumido cru, quando muito novinho, ou cozido em saladas, sopas, suflês, refogado no arroz ou outros pratos. É uma hortaliça pouco durável e deve ser consumida rapidamente após a colheita, exigindo uma boa coordenação entre quem produz e distribui as hortaliças."
            },
            {
                "id": 15,
                "slug": "cebola",
                "nome": "Cebola",
                "nome_popular": "Cebola",
                "nome_cientifico": "Allium cepa L.",
                "descricao": "É planta originária da Ásia, sendo que a parte utilizável é um bulbo originado de folhas carnosas. É rica em vitaminas do complexo B, principalmente B1 e B2, e vitamina C. Pode ser semeada em local definitivo e em bandejas ou sementeiras para posterior transplante das mudas. O plantio também pode ser feito por bulbinhos, colhidos com 1 a 3 centímetros de diâmetro. Existe no mercado cultivares adaptadas a períodos de dias mais curtos e mais longos, de ciclo curto, mediano e longo.",
                "epoca_regiao": "De modo geral, não forma bulbos em dias com duração inferior a 10 horas de luz. Os bulbos crescem e amadurecem mais rapidamente sob temperaturas altas. Mas a alta temperatura não tem efeito, se as horas de luz diárias exigidas não forem suficientes. Plantas expostas a um período prolongado de frio são induzidas a florescer, o que é desejável somente a produtores de sementes.",
                "plantio": {
                    "Sul": "jul-ago",
                    "Sudeste": "fev-mai",
                    "Nordeste": "fev-abr",
                    "Centro-oeste": "fev-mai",
                    "Norte": "fev-mai"
                },
                "colheita": "120-180",
                "companheiras": "Alface, Alho-Francê, Beterraba, Camomila, Cenoura, Erva-Doce, Morango, Pepino, Salgado, Tomate ",
                "aproveitamento": "É usada principalmente para realçar o sabor dos alimentos. Pode ser consumida em saladas, no preparo de sopas, carnes, patês, pizzas, biscoitos, frita à milanesa ou assada. Também pode ser comercializada na forma de conservas e pastas."
            },
            {
                "id": 16,
                "slug": "cebolinha",
                "nome": "Cebolinha",
                "nome_popular": "Cebolinha",
                "nome_cientifico": "Allium schoenoprasum L.; Allium fistulosum L.",
                "descricao": "As plantas de cebolinha se parecem com as de cebola, porém possuem um número maior de folhas que formam uma touceira. As folhas são uma boa fonte de cálcio, vitamina C e vitamina A. É propagada por sementes ou pelo plantio de parte da touceira. Devido à capacidade de rebrota, podem ser feitas várias colheitas.",
                "epoca_regiao": "Produz melhor sob temperaturas amenas a frias (de 25ºC para baixo), sendo plantadas geralmente nas estações de outono e inverno.",
                "plantio": {
                    "Sul": "ano todo",
                    "Sudeste": "ano todo",
                    "Nordeste": "mar-jul",
                    "Centro-oeste": "abr-ago",
                    "Norte": "abr-out"
                },
                "colheita": "80-100",
                "companheiras": "cenoura, alface, rúcula, radite",
                "aproveitamento": "É utilizada para dar aroma e sabor a pratos variados, como sopas, carnes, peixes e assados em geral. Pode ser congelada para aproveitamento posterior. Geralmente é comercializada em maços juntamente com a salsa ou o coentro, o chamado cheiro-verde."
            },
            {
                "id": 17,
                "slug": "cenoura",
                "nome": "Cenoura",
                "nome_popular": "Cenoura",
                "nome_cientifico": "Daucus carota L.",
                "descricao": "A cenoura é uma planta cuja parte comestível é a raiz tuberosa de cor alaranjada. Tem alto teor de betacaroteno, substância necessária à produção de vitamina A pelo nosso organismo. Também fornece cálcio, sódio e potássio. O solo deve ser bem fofo, sem qualquer obstáculo ao crescimento das raízes, para que não ocorram deformações. O amarelecimento e o secamento das folhas mais velhas e o arqueamento das folhas mais novas são indicativos do ponto de colheita.",
                "epoca_regiao": "A faixa ideal para uma germinação rápida e uniforme das sementes é de 20º a 30ºC. Para cultivares de verão, baixas temperaturas no campo induzem as plantas a florescerem, o que só é desejável para produtores de sementes. Deve-se atentar à adequação da cultivar com o clima na época de plantio.",
                "plantio": {
                    "Sul": "nov-jan",
                    "Sudeste": "out-mar",
                    "Nordeste": "out-mar",
                    "Centro-oeste": "out-mar",
                    "Norte": "out-mar"
                },
                "colheita": "85-100",
                "companheiras": "Acelga, Aipo, Alecrim, Alface, Alho, Alho-Francê, Cebola, Cebolinho, Cerefólio, Ervilha, Espinafre, Rabanete, Rábano, Sálvia, Tomate",
                "aproveitamento": "Além do consumo in natura em saladas (crua ou cozida) e na forma de bolo, pão, purê, suflê, creme, doce ou suco, também é utilizada como matéria-prima para indústrias processadoras de alimentos. Assim, são comercializadas na forma minimamente processada (minicenouras, cubos, ralada, em rodelas) ou processada na forma de seleta de legumes, alimentos infantis e sopas instantâneas."
            },
            {
                "id": 18,
                "slug": "chicoria",
                "nome": "Chicória",
                "nome_popular": "Chicória, escarola ou en,dívia",
                "nome_cientifico": "Cichorium endivia L.",
                "descricao": "Parecida com a alface, a chicória possui dois tipos de cultivares: a lisa (chamada escarola) e a crespa (chamada endívia). É rica em fibras, vitaminas e minerais, em especial o potássio.",
                "epoca_regiao": "Produz melhor sob temperaturas não muito altas (amenas), entre 15º a 25ºC, sendo semeada normalmente nos períodos de outono e inverno. Em regiões altas de clima ameno, pode ser plantada o ano todo.",
                "plantio": {
                    "Sul": "fev-jul",
                    "Sudeste": "fev-jul",
                    "Nordeste": "fev-ago",
                    "Centro-oeste": "abr-jun",
                    "Norte": "mar-ago"
                },
                "colheita": "60-70",
                "companheiras": "Abóbora, Rabanete, Rúcula, feijão-vagem",
                "aproveitamento": "Pode ser consumida crua em saladas e refogada, como a couve. Substitui a couve em sopas, omeletes e até em sucos. Não deve ser cozida em excesso, pois perde suas propriedades nutricionais devido ao calor."
            },
            {
                "id": 19,
                "slug": "chuchu",
                "nome": "Chuchu",
                "nome_popular": "Chuchu",
                "nome_cientifico": "Sechium edule Sw.",
                "descricao": "É uma planta de hábito trepador e seus frutos são ricos em fibras, vitaminas A, B1 e C e sais minerais como o potássio. Na mesma planta encontram-se flores femininas (que originam os frutos) e masculinas (que fornecem o pólen). O solo deve ser bem drenado, e o plantio é feito colocando na cova o fruto brotado, maduro e sem doenças. Não se deve enterrar ou cobrir de terra inteiramente o chuchu. A cultura é muito exigente em água. No inverno, as ramas e folhas secas devem ser retiradas.",
                "epoca_regiao": "Produz bem sob temperaturas amenas (entre 15° e 25°C), porém não tolera frio excessivo. Calor e chuvas em excesso provocam queda das flores e ataque por doenças causadas por fungos.",
                "plantio": {
                    "Sul": "set-out",
                    "Sudeste": "set-out",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "set-out",
                    "Norte": "abr-jul"
                },
                "colheita": "100-120",
                "companheiras": "Quiabo, milho",
                "aproveitamento": "É consumido cozido em sopas e refogados, suflês, tortas e em saladas frias. Atualmente tem-se observado o crescimento do comércio de chuchu cortado e embalado para o preparo de sopas."
            },
            {
                "id": 20,
                "slug": "coentro",
                "nome": "Coentro",
                "nome_popular": "Coentro",
                "nome_cientifico": "Coriandrum sativum L.",
                "descricao": "É uma hortaliça condimentar da mesma família da cenoura, da salsa e da mandioquinhasalsa. O coentro é rico em vitaminas A, B1, B2 e C. Normalmente é plantado em local definitivo, via semente. As plantinhas devem ser desbastadas, ficando distanciadas de 8 a 10 centímetros uma da outra. É pouco exigente em relação ao solo e muito tolerante à acidez.",
                "epoca_regiao": "É uma cultura de clima quente e não tolera baixas temperaturas.",
                "plantio": {
                    "Sul": "set-jan",
                    "Sudeste": "ago-fev",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ago-abr",
                    "Norte": "abr-out"
                },
                "colheita": "50-60",
                "companheiras": "Anis",
                "aproveitamento": "Dá aroma e sabor a variados pratos. Pode ser ingrediente de sopas, saladas, carnes e peixes e cozidos em geral. Deve ser colocado ao final do preparo, para não ficar murcho. O coentro é geralmente comercializado em conjunto com a cebolinha, composição chamada cheiro-verde."
            },
            {
                "id": 21,
                "slug": "couve",
                "nome": "Couve",
                "nome_popular": "Couve manteiga ou couve de folhas",
                "nome_cientifico": "Brassica oleracea L. var. acephala D.C.",
                "descricao": "Apresenta caule ereto e emite novas folhas continuamente ao redor do caule. É muito rica em nutrientes, especialmente cálcio, ferro e vitaminas A, C, K e B5. Propaga-se por semente ou por plantio do broto lateral. Essa é a forma de propagação mais comum. A cultura é bastante exigente em boro e molibdênio.",
                "epoca_regiao": "A couve é uma cultura típica dos períodos de outono e inverno, apresentando certa tolerância ao calor. Pode ser plantada durante o ano todo, mas as épocas mais indicadas por região estão descritas abaixo.",
                "plantio": {
                    "Sul": "fev-jul",
                    "Sudeste": "fev-jul",
                    "Nordeste": "abr-ago",
                    "Centro-oeste": "fev-jul",
                    "Norte": "abr-jul"
                },
                "colheita": "80-90",
                "companheiras": "Acelga, Aipo, Alecrim, Alface, Alho-Francê, Batata, Beterraba, Ervilha, Espinafre, Feijão",
                "aproveitamento": "As folhas da couve podem ser comercializadas em maços e na forma minimamente processada, ou seja, já picadas e embaladas. A couve pode ser consumida crua, em sucos e saladas, refogada ou como ingrediente de sopas, farofas e cozidos. Deve ser comercializada e consumida em pouco tempo, pois sua vida útil é curta, quando não congelada."
            },
            {
                "id": 22,
                "slug": "couve-chinesa",
                "nome": "Couve-chinesa",
                "nome_popular": "Couve-chinesa ou repolho chinês,, chamada erroneamente de acelga.",
                "nome_cientifico": "Brassica pekinensis (Lou.).",
                "descricao": "A couve-chinesa possui folhas de cor verde-claro com a parte central branca. Fonte de ácido fólico (importante para a formação do sangue), além de vitamina A, vitaminas do grupo B e C, além de cálcio e potássio. São semeadas em bandejas e depois transplantadas para o canteiro definitivo, ou diretamente no canteiro, sendo necessário selecionar as melhores plantas.",
                "epoca_regiao": "A maioria das cultivares tem melhor produção sob temperaturas amenas (entre 15º e 25ºC), mas há cultivares mais tolerantes ao calor.",
                "plantio": {
                    "Sul": "ano todo",
                    "Sudeste": "ano todo",
                    "Nordeste": "mar-mai",
                    "Centro-oeste": "mar-mai",
                    "Norte": "*"
                },
                "colheita": "60-70",
                "companheiras": "Vagem",
                "aproveitamento": "As folhas podem ser consumidas cruas ou cozidas. É muito usada na culinária oriental na preparação de macarrão e carnes. Pode ser usada em sopas, tortas, misturadas no arroz e na salada (folhas cruas)."
            },
            {
                "id": 23,
                "slug": "couve-flor",
                "nome": "Couve-flor",
                "nome_popular": "Couve-flor",
                "nome_cientifico": "Brassica oleracea var. botritys",
                "descricao": "É uma hortaliça rica em cálcio e fósforo e fonte de folato e vitamina C. A parte comestível é a inflorescência (conjunto de floretes) ainda imatura, antes da abertura das flores. As mudas devem ser produzidas em substrato enriquecido com cálcio e fósforo e pobre em nitrogênio. Assim como o brócolis, é muito exigente em adubação com boro e molibdênio. Devese irrigar bem a lavoura de couve-flor, mas sem excesso, para não favorecer o aparecimento de doenças. Algumas folhas devem ser mantidas para a proteção da cabeça durante o transporte que, preferencialmente, deve ser feito sob refrigeração.",
                "epoca_regiao": "É fundamental a escolha da cultivar correta de acordo com a época de plantio, pois há cultivares adaptadas a temperaturas mais quentes e a temperaturas mais amenas, entre 15º e 25ºC.",
                "plantio": {
                    "Sul": "dez-jan",
                    "Sudeste": "out-fev",
                    "Nordeste": "nov-dez",
                    "Centro-oeste": "out-jan",
                    "Norte": "nov-fev"
                },
                "colheita": "90-100",
                "companheiras": "Açúcar, Aipo, Batata, Camomila, Cebola, Chaga, Endro, Feijão, Hortelã, Rabanete, Sálvia",
                "aproveitamento": "É consumida cozida em saladas, tortas, sopas e molhos, além de pratos fritos ou assados. Deve-se cozinhá-la antes de fritar ou assar. A couve-flor comercializada na forma minimamente processada vem apresentando crescimento considerável em diversos supermercados. A cabeça é cortada em pequenos floretes, que são acomodados em bandejas envoltas por filmes plásticos."
            },
            {
                "id": 24,
                "slug": "ervilha",
                "nome": "Ervilha",
                "nome_popular": "Ervilha",
                "nome_cientifico": "Pisum sativum L.",
                "descricao": "A ervilha é uma planta semelhante a feijão-vagem. Produz grãos tanto para a agroindústria (cultivares para debulhar, que geram grãos secos e verdes) quanto para consumo em vagem comestível. As ervilhas são hortaliças muito nutritivas e fornecem boa quantidade de vitaminas A, C e B, minerais e fibras. A semeadura é feita diretamente no local definitivo, pois não tolera o transplante. Para a produção de vagens comestíveis, a colheita deve se iniciar de 60 a 100 dias após o plantio, com os grãos ainda em desenvolvimento, dependendo da cultivar.",
                "epoca_regiao": "Exige temperaturas amenas a frias (de 25ºC para baixo), adaptandose às condições dos períodos de outono e inverno das regiões Sul, Sudeste e Centro-Oeste. Para não prejudicar a qualidade dos grãos secos, não devem ocorrer chuvas no início da colheita.",
                "plantio": {
                    "Sul": "abr-mai",
                    "Sudeste": "abr-mai",
                    "Nordeste": "*",
                    "Centro-oeste": "abr-mai",
                    "Norte": "*"
                },
                "colheita": "60-70",
                "companheiras": "Aipo, Alface, Batata, Cenoura, Couve, Feijão, Milho, Nabo, Pepino, Picle, Rabanete, Rábano, Repolho",
                "aproveitamento": "A ervilha é muito usada no preparo de pratos orientais (arroz colorido) e no recheio de massas, panquecas e cachorro-quente. É muito apreciada em saladas frias. Tanto as vagens comestíveis quanto os grãos (verdes e secos) são consumidos cozidos."
            },
            {
                "id": 25,
                "slug": "espinafre",
                "nome": "Espinafre",
                "nome_popular": "Espinafre",
                "nome_cientifico": "Spinacea oleracea L. (espinafre verdadeiro ou europeu) e Tetragonia expansa (Espinafre da Nova Zelândia)",
                "descricao": "Há duas hortaliças conhecidas como espinafre. O mais encontrado no Brasil é o espinafre da Nova Zelândia, planta que produz grandes folhas carnosas de cor verde-escuro. É rico em vitamina A, do complexo B e sais minerais, principalmente ferro. Recomenda-se a semeadura em bandejas para posterior transplante. Também é possível enraizar os seus ramos cortados pela base. Suas folhas devem ser colhidas antes que a planta emita o pendão e forme flores. Podem ser feitos cortes sucessivos, os quais estimulam a produção de novas folhas.",
                "epoca_regiao": "Pode ser cultivado numa ampla faixa de temperatura, mas produz melhor sob temperaturas amenas (entre 15° e 25°C), com resistência ao calor. Não tolera frio excessivo.",
                "plantio": {
                    "Sul": "fev-set",
                    "Sudeste": "fev-set",
                    "Nordeste": "mar-ago",
                    "Centro-oeste": "mar-ago",
                    "Norte": "mar-mai"
                },
                "colheita": "60-80",
                "companheiras": "Aipo, Alface, Alho-Francê, Batata, Beterraba, Couve, Feijão, Milho, Morango, Nabo, Rabanete, Rábano, Repolho, Tomate",
                "aproveitamento": "Pode ser consumido cru em saladas ou refogado, como a couve, em sopas, cremes, molhos, tortas, omeletes e até em sucos. É comercializado em maços."
            },
            {
                "id": 26,
                "slug": "feijao-vagem",
                "nome": "Feijão-vagem",
                "nome_popular": "Feijão-vagem ou vagem",
                "nome_cientifico": "Phaseolus vulgaris L.",
                "descricao": "O feijão-vagem é rico em proteína, importante para a formação dos músculos. Possui cultivares de três tipos: grupo macarrão (vagem cilíndricas), grupo manteiga (vagens achatadas) e as do grupo rasteiro (vagem cilíndrica e planta de crescimento determinado). Deve ser semeado diretamente no local definitivo de plantio. Temperaturas extremas (calor ou frio excessivo) podem provocar queda de flores ou vagens deformadas pela deficiência na polinização. O ponto de colheita ideal é quando as vagens atingem o máximo de desenvolvimento, antes de se tornarem fibrosas.",
                "epoca_regiao": "Não tolera baixas temperaturas e geadas, desenvolvendo-se melhor sob temperaturas amenas (entre 15° e 25°C) a altas. Em regiões com inverno ameno, é possível o plantio durante o ano todo.",
                "plantio": {
                    "Sul": "set-mar",
                    "Sudeste": "ago-mar",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "mar-ago",
                    "Norte": "abr-jul"
                },
                "colheita": "60-70",
                "companheiras": "milho, batata-inglesa, cenoura, pepino, nabo, couve-flor, repolho, couve, segurelha, tomilho",
                "aproveitamento": "Vagens são consumidas cozidas, em pouca água ou no vapor, para não perderem muitos nutrientes. São utilizadas em saladas, cozidos, tortas, sopas e farofas. Podem ser comercializadas a granel, em porções já pesadas, acondicionadas em bandejas ou cortadas, higienizadas e embaladas."
            },
            {
                "id": 27,
                "slug": "gengibre",
                "nome": "Gengibre",
                "nome_popular": "Gengibre",
                "nome_cientifico": "Zingiber officinale Roscoe",
                "descricao": "O gengibre é uma planta que pode chegar a 1,20 metro de altura. Os rizomas, que são caules localizados embaixo da terra, são utilizados tanto para o consumo humano quanto para o plantio. São ricos em vitamina A, B, B2, B5, C, potássio, sódio. A planta cresce entre 90 e 120 centímetros e suas folhas são em forma de lança. Prefere solos arenosos, bem drenados e ricos em matéria orgânica. Deve-se fazer a amontoa, ou seja, cobrir com terra a área onde estão desenvolvendo os rizomas, para que eles não fiquem expostos ao sol.",
                "epoca_regiao": "Os rizomas se desenvolvem melhor em climas tropicais e subtropicais. A planta é sensível à geada, e temperaturas abaixo de 13°C podem paralisar seu crescimento.",
                "plantio": {
                    "Sul": "ago-dez",
                    "Sudeste": "ago-dez",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ago-dez",
                    "Norte": "ano todo"
                },
                "colheita": "240-300",
                "companheiras": "",
                "aproveitamento": "Com o gengibre, podem ser preparados condimentos, refrigerantes, licores, cervejas e conservas. Com o óleo, preparam-se cosméticos. É utilizado como condimento de pratos chineses e japoneses, picles e para o preparo do quentão (bebida alcoólica com gengibre levada ao fogo)."
            },
            {
                "id": 28,
                "slug": "inhame",
                "nome": "Inhame",
                "nome_popular": "Inhame (antigo cará).",
                "nome_cientifico": "Dioscorea alata L. ; Dioscorea rotundata Poir; Dioscorea cayenensis",
                "descricao": "É uma planta trepadeira, mas se adapta bem à cultura rasteira. Suas folhas têm formato de ponta de lança e são estreitas. É alimento rico em carboidratos e também se destaca como fonte de vitaminas do complexo B. Os tubérculos sementes são plantados sobre leiras. A colheita é feita quando as folhas ficam amareladas e os ramos secos. É ainda conhecido como cará no centro-sul do Brasil.",
                "epoca_regiao": "Desenvolve-se bem sob altas temperaturas e chuvas abundantes. Não tolera frio nem geadas.",
                "plantio": {
                    "Sul": "jun-set",
                    "Sudeste": "jun-set",
                    "Nordeste": "dez-jan",
                    "Centro-oeste": "jul-ago",
                    "Norte": "jun-set"
                },
                "colheita": "150-180",
                "companheiras": "",
                "aproveitamento": "O inhame é consumido geralmente cozido. Pode ser usado das mesmas formas que a batata – em sopas, caldos, purês e refogados. Também pode ser ingrediente de pães, cremes, biscoitos, panquecas e tortas. Depois de cozido pode ser assado ou frito. Pode ser vendido inteiro ou já processado (cortado e embalado)."
            },
            {
                "id": 29,
                "slug": "jilo",
                "nome": "Jiló",
                "nome_popular": "Jiló",
                "nome_cientifico": "Solanum gilo Raddi",
                "descricao": "O jiló é um fruto colhido e consumido ainda imaturo (verde) e possui um sabor amargo. É da mesma família do tomate, batata, pimenta e pimentão. É rico em vitamina A, B, cálcio, fósforo, ferro. Os tipos de jiló mais encontrados no mercado são: os de formato comprido e de coloração verde-claro e os de formato esférico e de cor verde-escuro. O plantio é feito por mudas, produzidas em bandejas ou copinhos. Não tolera excesso de água no solo, que deve ser bem drenado. Não é muito exigente em adubação e tolera a acidez. Pode ser necessário colocar estacas nas plantas para que não tombem.",
                "epoca_regiao": "É uma planta típica de clima tropical, sendo plantado nos períodos de primavera e verão. Onde o inverno não é rigoroso, pode ser plantado o ano todo.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "ago-mar",
                    "Nordeste": "mar-set",
                    "Centro-oeste": "abr-ago",
                    "Norte": "abr-ago"
                },
                "colheita": "90-100",
                "companheiras": "aipo, alface, alho, cebola, feijão, milho, cenoura, espinafre e couve flor",
                "aproveitamento": "O jiló é consumido ainda verde e cozido, na forma de refogados, saladas frias, farofas e recheios de tortas. Pode ser vendido em caixas ou embalado em bandejas de isopor, o que aumenta seu valor de venda."
            },
            {
                "id": 30,
                "slug": "mandioquinha-salsa",
                "nome": "Mandioquinha-salsa",
                "nome_popular": "Mandioquinha-salsa, baroa, batata-baroa,, mandioquinha, batata-salsa, batata fiúza e cenoura-amarela",
                "nome_cientifico": "Arracacia xanthorrhiza Banc.",
                "descricao": "Suas raízes são ricas em vitaminas do complexo B e carboidratos, além de minerais. É uma cultura de valor comercial alto em relação a outras hortaliças de raízes. O plantio é feito de brotos (filhotes) tirados de uma planta sadia. É feito em leiras e em solos bem drenados. A colheita é feita entre 10 e 12 meses após o plantio.",
                "epoca_regiao": "É uma cultura de clima ameno e de elevadas altitudes. Na regiões Sudeste e Centro-Oeste, somente é possível o cultivo acima de 800 metros de altitude, e em Santa Catarina e Rio Grande do Sul, acima de 500 metros.",
                "plantio": {
                    "Sul": "abr-mai",
                    "Sudeste": "abr-mai",
                    "Nordeste": "*",
                    "Centro-oeste": "abr-mai",
                    "Norte": "*"
                },
                "colheita": "300-360",
                "companheiras": "",
                "aproveitamento": "Por ser de fácil digestão, é recomendada para alimentação infantil, de pessoas doentes e idosas. Pode ser vendida em caixas plásticas, depois de classificada por tamanho, ou embalada a vácuo, em porções menores, para melhor conservação. É muito utilizada para processamento em agroindústria, na fabricação de sopas prontas."
            },
            {
                "id": 31,
                "slug": "maxixe",
                "nome": "Maxixe",
                "nome_popular": "Maxixe",
                "nome_cientifico": "Cucumis anguria L.",
                "descricao": "Os frutos são fonte de minerais, principalmente zinco, e têm poucas calorias. O plantio é feito colocando-se três sementes por cova. Não é muito exigente em adubação e tolera a acidez do solo. Adapta-se melhor a solos arenosos.",
                "epoca_regiao": "É uma hortaliça de clima tropical, suporta temperaturas elevadas e chuvas abundantes. Em regiões altas só pode ser semeado nos períodos de primavera e verão. Na Região Norte, o excesso de chuvas pode provocar doenças.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "set-fev",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ano todo",
                    "Norte": "ano todo"
                },
                "colheita": "60-70",
                "companheiras": "quiabo, milho",
                "aproveitamento": "Se colhido ainda verde, ele pode ser preparado cru, como salada, ou cozido como é mais comum ser consumido na forma de sopas ou refogados. É normalmente vendido para o consumidor final a granel, ou em bandejas de isopor, como forma de aumentar o valor do produto. Deve-se classificar o maxixe por tamanho e cor, para vender o produto por um preço melhor."
            },
            {
                "id": 32,
                "slug": "melancia",
                "nome": "Melancia",
                "nome_popular": "Melancia",
                "nome_cientifico": "Citrullus lanatus (Thunb.) Matsum. & Nakai",
                "descricao": "É rica em vitamina A e vitamina C. Possui flores femininas (que originarão o fruto) e masculinas (que fornecem o pólen) na mesma planta. É essencial a presença de abelhas para que o fruto fique bem formado. Dias quentes e secos originam frutos mais doces. Há cultivares de formato alongado, globular (a mais comum), sem sementes e de tamanho mini. A melancia deve ser colhida quando a casca em contato com o solo mudar da cor verde esbranquiçado para amarelo.",
                "epoca_regiao": "Exige temperaturas elevadas e não tolera frio nem geadas. Em regiões de baixa altitude e com irrigação como as observadas no Centro-Oeste, a melancia também pode ser plantada nos períodos de outono e inverno, utilizando-se irrigação para formar frutos de alta qualidade.",
                "plantio": {
                    "Sul": "set-jan",
                    "Sudeste": "ago-mar",
                    "Nordeste": "mar-set",
                    "Centro-oeste": "set-dez",
                    "Norte": "abr-ago"
                },
                "colheita": "85-90",
                "companheiras": "milho",
                "aproveitamento": "A melancia deve ser manuseada com cuidado para evitar danos mecânicos (pancadas), empilhando no máximo cinco camadas de frutos. É consumida in natura e na forma de sucos. Da casca podem ser feitos deliciosos doces e compotas."
            },
            {
                "id": 33,
                "slug": "melao",
                "nome": "Melão",
                "nome_popular": "Melão",
                "nome_cientifico": "Cucumis melo L. var. inodorus Naud.",
                "descricao": "A planta é muito parecida com a da melancia. As cultivares de melão estão distribuídas em dois grupos: inodorus (de casca firme e polpa usualmente branca), e aromáticos (de casca mais frágil e com aroma e sabor mais fortes). É uma cultura exigente em adubação. Pode ser plantada por mudas feitas em bandejas ou copinhos. É necessário girar os frutos, expondo toda a superfície à luz do sol para obter uma cor mais uniforme.",
                "epoca_regiao": "É uma planta de clima quente e todas as fases de desenvolvimento da planta são prejudicadas por baixas temperaturas (temperatura mínima ideal é em torno de 20°C). Não tolera frio nem geadas. Dias e noites quentes e baixa umidade relativa do ar são as condições ideais para essa cultura.",
                "plantio": {
                    "Sul": "*",
                    "Sudeste": "set-fev",
                    "Nordeste": "mar-set",
                    "Centro-oeste": "set-dez",
                    "Norte": "abr-ago"
                },
                "colheita": "80-120",
                "companheiras": "milho",
                "aproveitamento": "O melão é geralmente consumido in natura e na forma de sucos. Deve-se ter bastante cuidado no transporte, colocando-os em caixas de papelão. Tem sido uma excelente opção para produtores do semi-árido nordestino."
            },
            {
                "id": 34,
                "slug": "milho-verde",
                "nome": "Milho-verde",
                "nome_popular": "Milho-verde.",
                "nome_cientifico": "Zea mays L.",
                "descricao": "É o milho colhido em estágio ainda imaturo (verde). As espigas são verde-claras e os grãos amarelados. Produz em vários tipos de solo, porém é exigente em adubação com zinco e magnésio, devendo ser bem adubado. Essa cultura é uma ótima opção para rotação de culturas com as demais hortaliças. Existem cultivares para colheita de milho-doce e para colheita de milho-verde O milho-doce possui grãos ricos em açúcar, enquanto os grãos de milho-verde são ricos em amido.",
                "epoca_regiao": "Desenvolve-se bem em regiões de clima quente e ameno, sendo prejudicada pelo frio e geada. Onde não há inverno rigoroso, pode ser plantado o ano todo.",
                "plantio": {
                    "Sul": "ago-fev",
                    "Sudeste": "set-dez",
                    "Nordeste": "out-mar",
                    "Centro-oeste": "set-jan",
                    "Norte": "mar-mai"
                },
                "colheita": "80-110",
                "companheiras": "Abóbora, Abobrinha, Batata, Ervilha, Feijões, Pepino, Mandioquinha, Manjerona, Melão, Rabanetes, Salsa",
                "aproveitamento": "O milho-doce e o milho-verde podem ser consumidos cozidos ou assados, como ingredientes no recheio em pizzas e tortas, pastelões, cachorro-quente, saladas, entre outros pratos. No Brasil, o milho-doce é predominantemente utilizado na forma de conserva, sendo enviado para a agroindústria para ser enlatado. Por não ser rico em amido, o milho-doce não é recomendado para o preparo de pamonha e curau. Já o milho-verde é muito utilizado para o preparo de pratos típicos, como: pamonha, curau e cremes de milho. A vida póscolheita dos dois tipos de milho é bastante curta, devendo ser comercializado rapidamente."
            },
            {
                "id": 35,
                "slug": "moranga",
                "nome": "Moranga",
                "nome_popular": "Moranga",
                "nome_cientifico": "Cucurbita maxima Duch.",
                "descricao": "Os frutos da moranga são ricos em vitamina A e carboidratos. É uma cultura que se adapta a vários tipos de solo, sendo a condução da lavoura semelhante à de abóbora. Assim como as abóboras, pode ser plantada em local definitivo (2 a 3 sementes por cova), ou por transplante de mudas semeadas em bandejas ou copinhos. Deve-se tomar o cuidado para não danificar as raízes no momento do transplante. Os frutos possuem polpa e casca alaranjadas e seus gomos são destacados.",
                "epoca_regiao": "São mais tolerantes que as abóboras em relação a temperaturas mais baixas e menos tolerante ao excesso de chuvas. É uma planta de clima quente, mas tolera temperaturas amenas (entre 15° a 25°C). São geralmente plantadas durante a primavera-verão.",
                "plantio": {
                    "Sul": "set-dez",
                    "Sudeste": "set-dez",
                    "Nordeste": "mar-jun",
                    "Centro-oeste": "set-dez",
                    "Norte": "*"
                },
                "colheita": "120-150",
                "companheiras": "Alface, Chaga, Feijão, Manjericão, Melão, Milho",
                "aproveitamento": "As formas de preparo são semelhantes às da abóbora. Doces e purês são muito apreciados. Alguns pratos regionais são preparados com a moranga inteira, como camarão na moranga ou carne seca na moranga."
            },
            {
                "id": 36,
                "slug": "morango",
                "nome": "Morango",
                "nome_popular": "Morango",
                "nome_cientifico": "Fragaria X ananassa Duch.",
                "descricao": "O morangueiro é uma planta rasteira. Forma pequenas touceiras que vão se alastrando pela emissão de estolhos (brotos). Esses brotos enraízam e formam novas plantas ao redor. Seu plantio em local definitivo é feito por mudas produzidas dos estolhos retirados da planta-mãe. A parte comestível é um pseudofruto, ou seja, um falso fruto, vermelho e rico em vitaminas A e C e sais minerais. O plantio é feito em canteiros e em solos bem drenados, para evitar o encharcamento.",
                "epoca_regiao": "É originário de clima frio, mas não tolera geadas. Há cultivares adaptadas a temperaturas amenas (entre 15° e 25°C). Dias curtos de outono-inverno favorecem a frutificação. Temperaturas elevadas favorecem o crescimento vegetativo e deixam os frutos muito azedos.",
                "plantio": {
                    "Sul": "mar-abr",
                    "Sudeste": "mar-abr",
                    "Nordeste": "*",
                    "Centro-oeste": "fev-mar",
                    "Norte": "*"
                },
                "colheita": "70-80",
                "companheiras": "Alface, Alho, Alho-Francê, Beterraba, Cebola, Couve, Espinafre, Feijão, Rabanete, Rábano, Tomilho",
                "aproveitamento": "Os morangos podem ser comercializados em caixas plásticas direto ao consumidor final ou podem ser destinados à agroindústria para a produção de sucos, geléias, doces. Pode ser ingrediente de vários produtos, como iogurtes, biscoitos e tortas."
            },
            {
                "id": 37,
                "slug": "mostarda",
                "nome": "Mostarda",
                "nome_popular": "Mostarda ou mostarda de folhas,",
                "nome_cientifico": "Brassica juncea (L.) Coss.",
                "descricao": "A mostarda é da mesma família da couve e brócolis. Há cultivares para a produção de folhas (consumo em saladas) e outras cultivares e espécies para a produção de grãos (fabricação de molhos e temperos). Para folhas, as cultivares mais plantadas são a Lisa da Flórida e Lisa de Irajá. O sabor picante é característico dessa hortaliça. É fonte de vitaminas C e A, de cálcio e possui teores moderados de ferro, sódio, potássio e magnésio. O plantio pode ser feito por mudas semeadas em bandejas ou diretamente no local definitivo, retirando as plantas em excesso.",
                "epoca_regiao": "Prefere temperaturas mais amenas (entre 15° e 25°C).",
                "plantio": {
                    "Sul": "jul-dez",
                    "Sudeste": "mar-ago",
                    "Nordeste": "fev-jul",
                    "Centro-oeste": "mar-jul",
                    "Norte": "*"
                },
                "colheita": "45-50",
                "companheiras": "Milho, Couve, Couve-Flor, Rabanete, Couve-de-Bruxelas, Nabo",
                "aproveitamento": "Suas folhas são vendidas em maços e podem ser consumidas cruas ou refogadas. Tem uma vida pós-colheita bastante curta e deve ser rapidamente comercializada após colhida."
            },
            {
                "id": 38,
                "slug": "nabo",
                "nome": "Nabo",
                "nome_popular": "Nabo",
                "nome_cientifico": "Brassica rapa var. rapa (L.) Thell.",
                "descricao": "Da mesma família do repolho, da couve e do rabanete. É uma planta que produz raiz e folhas comestíveis, sendo a sua raiz mais consumida que as folhas. É fonte de fibras e sais minerais, principalmente cálcio. É semeado diretamente em local definitivo. Deve-se retirar o excesso de plantas, deixando as melhores a uma distância de 10 centímetros uma da outra. Não é muito exigente em adubação, e o solo argiloso favorece a cultura.",
                "epoca_regiao": "Prefere temperaturas amenas (entre 15° e 25°C) a frias, suportando geadas leves. Pode ser semeado nos períodos de outono e inverno na maioria das regiões e, ao longo do ano, em regiões de elevadas altitudes.",
                "plantio": {
                    "Sul": "abr-mai",
                    "Sudeste": "jan-ago",
                    "Nordeste": "fev-jul",
                    "Centro-oeste": "fev-jul",
                    "Norte": "abr-jul"
                },
                "colheita": "50-60",
                "companheiras": "Acelga, Alecrim, Alface, Ervilha, Espinafre, Feijão, Hortelã",
                "aproveitamento": "A comercialização é feita amarrando-se plantas inteiras em molhos, depois de serem lavadas. Pode ser consumido em saladas e sopas."
            },
            {
                "id": 39,
                "slug": "pepino",
                "nome": "Pepino",
                "nome_popular": "Pepino",
                "nome_cientifico": "Cucumis sativus L.",
                "descricao": "É uma planta da mesma família da abóbora e do chuchu. Pode ser trepadeira se tiver suporte. Em geral, necessita de abelhas para polinizar e formar os frutos. Há cultivares, entretanto, que produzem frutos sem a necessidade de polinização. Atualmente são encontrados cinco tipos de pepino do mercado: grupo Caipira, grupo Aodai, grupo Japonês, grupo Holandês (Beith-alpha) e grupo Agroindustrial (usado na fabricação de picles). Adapta-se melhor em solos arenosos e ricos em adubação orgânica. Pode ser plantado via semente em local definitivo ou por mudas, semeadas em bandejas. Deve-se ralear os frutinhos mal formados logo que o problema ocorrer.",
                "epoca_regiao": "É uma cultura de clima quente, e se adapta a temperaturas amenas (entre 15° e 25°C). Frio e geada prejudicam e podem até destruir a cultura. No inverno não muito rigoroso pode ser cultivada em casas de vegetação (estufa), podendo se beneficiar dos melhores preços no mercado.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "set-fev",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "jul-nov",
                    "Norte": "abr-set"
                },
                "colheita": "45-60",
                "companheiras": "Aipo, Alface, Beterraba, Cebola, Ervilha, Feijão, Girassol, Milho, Repolho, Salsa",
                "aproveitamento": "Os frutos podem ser acondicionados em caixas plásticas ou de papelão, devendo ser classificados para que o produtor obtenha melhores preços. São consumidos crus em saladas ou em conservas, na forma de picles."
            },
            {
                "id": 40,
                "slug": "pimenta",
                "nome": "Pimenta",
                "nome_popular": "Pimenta",
                "nome_cientifico": "Capsicum frutescens L.; Capsicum baccatum L.; Capsicum chinense Jacq., Capsicum praetermissum L.; Capsicum. Annuum L.",
                "descricao": "As pimenteiras são arbustos, que produzem frutos, em sua maioria, de sabor ardido ou picante. Há, entretanto, algumas “pimentas doces”, que não ardem. São fontes de vitamina A, B e C. Há pimentas de vários formatos e cores. Preferem solos bem drenados. O plantio é feito por mudas, semeadas em bandejas, deixando 1,3 a 1,5 metro de distância entre elas. Baixas temperaturas podem provocar queda de frutinhos.",
                "epoca_regiao": "São exigentes em calor e sensíveis a baixas temperaturas e intolerantes a geadas. Por isso, devem ser cultivadas preferencialmente nos meses de alta temperatura. Em regiões de baixa altitude, onde o inverno é ameno, as pimentas podem ser plantadas o ano inteiro.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "ago-mar",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ago-dez",
                    "Norte": "jul-dez"
                },
                "colheita": "90-120",
                "companheiras": "Cebola, Cenoura, Salsa, Tomate",
                "aproveitamento": "Podem ser vendidas in natura ou processadas na forma de pó, flocos, picles, escabeches, molhos líquidos, conservas de frutos inteiros, geléias etc. As pimentas picantes ainda são utilizadas pela indústria farmacêutica, na composição de pomadas para artrose e artrite, e também pela indústria de cosméticos, na composição de xampus antiquedas e anticaspas."
            },
            {
                "id": 41,
                "slug": "pimentao",
                "nome": "Pimentão",
                "nome_popular": "Pimentão",
                "nome_cientifico": "Capsicum annuum L.",
                "descricao": "O pimentão é uma das hortaliças mais ricas em vitamina C e, quando maduro, é excelente fonte de vitamina A. O plantio é feito em bandejas para posterior transplante em local definitivo. Deve ser tutorada (apoiada com estacas e arame) para não tombar. É exigente em nutrientes e se desenvolve melhor em solos com partículas médias (siltosos). É muito atacada por doenças, sendo recomendado alternar o plantio de pimentão com outras espécies (gramíneas, por exemplo), para diminuir a incidência de doença no próximo ciclo.",
                "epoca_regiao": "É uma planta de origem tropical, produzindo melhor sob temperaturas relativamente elevadas ou amenas (entre 15° e 25°C). Não tolera frio nem geadas, razão pela qual tem crescido o seu cultivo em casas de vegetação. Onde o inverno é ameno, pode ser cultivado durante o ano todo.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "ago-mar",
                    "Nordeste": "mai-set",
                    "Centro-oeste": "ago-dez",
                    "Norte": "abr-jul"
                },
                "colheita": "100-120",
                "companheiras": "Feijão, cenoura, calêndula, manjerona, cebola, atanásia, tomate",
                "aproveitamento": "É vendido verde ou maduro, dependendo da preferência do mercado consumidor e da logística de entrega (quando colhidos maduros, a vida pós-colheita é menor). Pode ser consumido cru ou como condimento no preparo de vários pratos. Para aumentar o valor de venda ao consumidor final, os pimentões podem ser acondicionados em bandejas de isopor."
            },
            {
                "id": 42,
                "slug": "quiabo",
                "nome": "Quiabo",
                "nome_popular": "Quiabo",
                "nome_cientifico": "Abelmoschus esculentus (L.) Moench ",
                "descricao": "É um arbusto originário da África, rústico e tolerante à acidez elevada do solo. Seus frutos são ricos em Vitamina A, B1, C. Na véspera do plantio, a dormência das sementes deve ser quebrada imergindo-as em água por 24 horas. O plantio pode ser por semeadura direta ou por mudas. É pouco exigente em água. Frio intenso pode provocar queda de flores e frutos.",
                "epoca_regiao": "Exige temperaturas altas e não tolera frio.",
                "plantio": {
                    "Sul": "out-dez",
                    "Sudeste": "ago-mar",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ago-fev",
                    "Norte": "ano todo"
                },
                "colheita": "70-80",
                "companheiras": "Milho, Maxixe, Alface, Pimentão, Berinjela, Majericão, Pepino",
                "aproveitamento": "A comercialização deve ser feita imediatamente após a colheita, por ser um fruto altamente perecível. Para aumento da sua vida pós-colheita, deve ser armazenado e transportado sob refrigeração. Geralmente é consumido cozido, refogado ou frito, como ingrediente principal em pratos típicos da Região Nordeste (caruru) e de Minas Gerais (frango com quiabo)."
            },
            {
                "id": 43,
                "slug": "rabanete",
                "nome": "Rabanete",
                "nome_popular": "Rabanete",
                "nome_cientifico": "Raphanus sativus L.",
                "descricao": "O rabanete produz raízes de formato esférico, cor de rosa avermelhado e polpa branca. É fonte de vitamina C, minerais e fibras. Não é muito exigente em adubação. O solo deve estar sempre úmido para evitar rachaduras, mas sem excesso para não provocar doenças. Deve ser colhido antes de atingir o seu tamanho máximo (em torno de 30 dias após a semeadura), pois pode se tornar esponjoso.",
                "epoca_regiao": "Adapta-se melhor ao cultivo nos períodos de outono e inverno, tolerando bem frio e geadas leves.",
                "plantio": {
                    "Sul": "mar-ago",
                    "Sudeste": "mar-ago",
                    "Nordeste": "mar-jul",
                    "Centro-oeste": "abr-set",
                    "Norte": "mar-ago"
                },
                "colheita": "25-30",
                "companheiras": "Acelga, Agrião, Alface, Alho, Cenoura, Couve, Ervilha, Espinafre, Feijão, Morango, Salsa, Tomate ",
                "aproveitamento": "O rabanete é consumido principalmente cru, em saladas, mas também pode ser consumido cozido ou na forma de picles. É vendido amarrando-se maços das plantas inteiras."
            },
            {
                "id": 44,
                "slug": "repolho",
                "nome": "Repolho",
                "nome_popular": "Repolho",
                "nome_cientifico": "Brassica oleracea L. var. capitata",
                "descricao": "O repolho possui folhas arredondadas dispostas umas sobre as outras, em forma de cabeça. É rico em fibras, sais minerais e vitaminas do complexo B, E e K. Temperaturas altas fazem com que as cabeças não fiquem bem formadas. O plantio é feito por mudas, semeadas em bandejas. É exigente em adubação e água, que deve ser fornecida constantemente para evitar rachaduras.",
                "epoca_regiao": "Desenvolve-se bem sob temperaturas amenas (entre 15° e 25°C) e frias, resistindo bem a geadas. Entretanto, há cultivares adaptadas a temperaturas mais altas.",
                "plantio": {
                    "Sul": "nov-jan",
                    "Sudeste": "out-fev",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "out-fev",
                    "Norte": "mar-set"
                },
                "colheita": "90-110",
                "companheiras": "alface, batata, beterraba, salsão, cebola, cebolinha, feijão-vagem, Hortelã, Manjerona, Tomilho",
                "aproveitamento": "O repolho é consumido cru, em saladas, ou cozido em sopas, refogados, acompanhando carnes e diversos pratos orientais. Pode também ser fermentado, para preparação do chucrute, prato alemão. Para venda, as “cabeças” são acondicionadas em caixas plásticas."
            },
            {
                "id": 45,
                "slug": "rucula",
                "nome": "Rúcula",
                "nome_popular": "Rúcula ou pinchão",
                "nome_cientifico": "Eruca sativa L.",
                "descricao": "A rúcula apresenta plantas de porte baixo, suas folhas são alongadas e recortadas, de coloração verde escuro e de sabor picante. Dentre todas as hortaliças, a rúcula é a fonte mais rica em ferro. Contém ainda cálcio, fósforo, Vitaminas A e C. Propaga-se por sementes plantadas em local definitivo ou em bandejas, sendo transplantadas posteriormente. A colheita se inicia de 40 a 60 dias após a semeadura, podendo-se colher os rebrotamentos.",
                "epoca_regiao": "Produz melhor sob temperaturas amenas (entre 15° e 25°C). Nas regiões em que o verão é ameno, pode ser plantada durante o ano todo.",
                "plantio": {
                    "Sul": "mar-ago",
                    "Sudeste": "mar-ago",
                    "Nordeste": "mar-jul",
                    "Centro-oeste": "mar-jul",
                    "Norte": "*"
                },
                "colheita": "40-60",
                "companheiras": "alface, cebolinha, chicória, milho, vagem",
                "aproveitamento": "Muito apreciada na forma de saladas, sendo também utilizada no preparo de tortas, quiches, pizzas e lasanhas. Pode ser vendida em maços ou já embalada e higienizada, pronta para o consumo. Tem pequena durabilidade pós-colheita, devendo ser rapidamente comercializada e consumida."
            },
            {
                "id": 46,
                "slug": "salsa",
                "nome": "Salsa",
                "nome_popular": "Salsa, salsinha",
                "nome_cientifico": "Petroselinum crispum (Mill.) Nym.",
                "descricao": "É um condimento aromático cujas folhas são ricas em vitamina A. Há cultivares de folhas lisas, crespas e muito crespas. Há ainda variedades para consumo das raízes. A germinação de suas sementes é muito lenta, principalmente se a temperatura for baixa. Para acelerar a germinação, recomenda-se deixar as sementes de molho em água durante uma noite. Prefere solos bem drenados, ricos em matéria orgânica, que devem ser mantidos sempre úmidos.",
                "epoca_regiao": "É uma planta de clima subtropical. Prefere temperaturas amenas, não muito frias, nem muito quentes (em torno de 20°C).",
                "plantio": {
                    "Sul": "mar-set",
                    "Sudeste": "mar-set",
                    "Nordeste": "mar-ago",
                    "Centro-oeste": "mar-ago",
                    "Norte": "*"
                },
                "colheita": "60-70",
                "companheiras": "Alho-Francê, Espargo, Milho, Rabanete, Tomate",
                "aproveitamento": "É vendida em maços, geralmente em conjunto com a cebolinha, conhecido como cheiro-verde. Dá aroma e sabor a diversos pratos, sendo utilizada inclusive para preparação de sucos."
            },
            {
                "id": 47,
                "slug": "taioba",
                "nome": "Taioba",
                "nome_popular": "Taioba",
                "nome_cientifico": "Xanthosoma sagittifolium (L.) Schott",
                "descricao": "A taioba é da mesma família do inhame. Tanto as folhas quanto os tubérculos são comestíveis. Suas folhas (parte mais consumida) são ricas em vitamina A, cálcio e fósforo. Não é muito exigente em adubação, sendo uma planta rústica. Plantam-se os brotos produzidos ao redor da planta-mãe.",
                "epoca_regiao": "É uma cultura de clima quente e exigente em chuva. Recomenda-se o plantio nos períodos de primavera e verão, entretanto pode ser plantada durante o ano todo em regiões baixas com inverno ameno, pois o frio paralisa o crescimento das folhas.",
                "plantio": {
                    "Sul": "set-nov",
                    "Sudeste": "set-nov",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "set-fev",
                    "Norte": "ano todo"
                },
                "colheita": "70-100",
                "companheiras": "Abóbora",
                "aproveitamento": "As folhas da taioba são consumidas refogadas como a couve. Cruas causam irritação das mucosas. Podem ser ingredientes de bolinhos e recheio de pizza e tortas. Suas folhas são vendidas em maços."
            },
            {
                "id": 48,
                "slug": "taro",
                "nome": "Taro",
                "nome_popular": "Taro (antigo inhame)",
                "nome_cientifico": "Colocasia esculenta (L.) Schott",
                "descricao": "Seus rizomas (caules subterrâneos) são a parte comestível, possuindo casca fibrosa e polpa branca. É fonte de carboidratos, vitaminas, ferro e fósforo. Produz melhor quando plantada em solos arenosos, mas não necessita de solo com alta fertilidade. São plantados os rizomas laterais inteiros, com o broto bem desenvolvido. Deve-se fazer a amontoa sobre as fileiras de plantas.",
                "epoca_regiao": "Exige temperaturas elevadas e chuvas abundantes e não tolera geadas.",
                "plantio": {
                    "Sul": "set-out",
                    "Sudeste": "dez-jan",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "set-out",
                    "Norte": "dez-jan"
                },
                "colheita": "150-180",
                "companheiras": "",
                "aproveitamento": "Pode ser consumido cozido, em sopas, refogados, saladas e sobremesas. Também pode ser industrializado na forma de farinha para fabricação de pães e bolos."
            },
            {
                "id": 49,
                "slug": "tomate",
                "nome": "Tomate",
                "nome_popular": "Tomate",
                "nome_cientifico": "Lycopersicon esculentum Mill.",
                "descricao": "É uma das hortaliças mais consumidas no mundo, sendo fonte de vitaminas A e C e de sais minerais como potássio. Há cultivares de crescimento determinado (destinadas para indústria de processamento) e de crescimento indeterminado (maioria destinada para mesa). São reunidas em cinco grupos: grupo Santa Cruz, Salada, Cereja, Italiano (ou Saladete ou San Marzano) e grupo Agroindustrial. É bastante exigente em adubação e é muito atacada por doenças, exigindo elevado conhecimento da cultura para um cultivo eficiente.",
                "epoca_regiao": "Desenvolve-se melhor em regiões altas (serras e planaltos) de clima tropical e também em clima subtropical ou temperado, seco e com alta incidência de luz solar. Regiões muito úmidas e quentes são problemáticas para a cultura, favorecendo doenças.",
                "plantio": {
                    "Sul": "set-fev",
                    "Sudeste": "ano todo",
                    "Nordeste": "ano todo",
                    "Centro-oeste": "ano todo",
                    "Norte": "mar-jul"
                },
                "colheita": "100-120",
                "companheiras": "Aipo, Alface, Alho, Alho-Francê, Cebola, Cebolinho, Cenoura, Couve-Flor, Endro, Espargo, Espinafre, Feijão, Manjericão, Milho, Rabanete, Salsa",
                "aproveitamento": "Os tomates podem ser destinados a agroindústria e para consumo à mesa. São consumidos na forma de molhos prontos e caseiros, extrato (polpa concentrada), doces, sucos e cru, na salada. São geralmente comercializados a granel (depois de classificados) em caixas de plástico, bandejas plásticas ou de isopor, cobertas com filme plástico."
            }
        ];
        var db = this.database;
        arr.forEach(function (p) {
            var plant = {
                "type": "plant",
                "user_id": "diegomr86@gmail.com",
                "picture": {
                    "url": p.slug + ".png",
                    "medium": "static/medium/" + p.slug + ".png",
                    "thumb": "static/thumbs/" + p.slug + ".png"
                },
                "name": p.nome,
                "scientific_name": p.nome_cientifico,
                "popular_name": p.nome_popular,
                "description": p.descricao + '\n\n' + p.epoca_regiao + '\n\n' + p.aproveitamento,
                "stratum": "",
                "cycle": "",
                "harvest_time": p.colheita + " dias",
                "spacing": "",
                "companion_plants": p.companheiras.split(', '),
                "additional_fields": [],
                "_id": p.slug
            };
            console.log('p:: ', plant);
            db.save(plant);
        });
    };
    PlantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plants',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/plants/plants.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'PLANTS_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="search($event)" placeholder="Procurar"></ion-searchbar>\n  <ion-grid>\n    <ion-row> \n      <ion-col>\n        <ion-select [(ngModel)]="filters.cycle" (ionChange)="search()" interface="popover" >\n          <ion-option value="">Todos os ciclos</ion-option>\n          <ion-option *ngFor="let cycle of Object.keys(database.cycles)" [value]="cycle">{{database.cycles[cycle]}}</ion-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-select [(ngModel)]="filters.stratum" (ionChange)="search()" interface="popover">\n          <ion-option value="">Todos os estratos</ion-option>\n          <ion-option *ngFor="let stratum of Object.keys(database.stratums)" [value]="stratum">{{database.stratums[stratum]}}</ion-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item-sliding *ngFor="let plant of plants">\n      <button ion-item (click)="open(plant._id)">\n        <ion-avatar item-start>\n          <img img-cache [source]="this.api.imageUrl(plant.picture, \'thumbs\')">\n        </ion-avatar>\n        <h2>{{plant.name}}</h2>\n        <p>{{plant.scientific_name}}</p>\n<!--         <ion-note item-end>\n          <div *ngIf="plant.cycle">\n            <p>Ciclo: <strong>{{database.cycles[plant.cycle]}}</strong></p>\n          </div>\n          <div *ngIf="plant.stratum">\n            <p>Estrato: <strong>{{database.cycles[plant.stratum]}}{{plant.stratum}}</strong></p>\n          </div>\n        </ion-note>\n -->      </button>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/plants/plants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PlantsPage);
    return PlantsPage;
}());

//# sourceMappingURL=plants.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
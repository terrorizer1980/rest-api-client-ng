'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">Senzing Rest Api Client (Angular)</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        \n                            <a href="license.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>LICENSE\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-ApiModule-9c05ab4e65fac80ba9510c6d76b400b1"' : 'data-target="#xs-injectables-links-module-ApiModule-9c05ab4e65fac80ba9510c6d76b400b1"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-ApiModule-9c05ab4e65fac80ba9510c6d76b400b1"' : 'id="xs-injectables-links-module-ApiModule-9c05ab4e65fac80ba9510c6d76b400b1"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AdminService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ConfigService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/EntityDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>EntityDataService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/EntityGraphService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>EntityGraphService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/Configuration.html" data-type="entity-link">Configuration</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/CustomHttpUrlEncodingCodec.html" data-type="entity-link">CustomHttpUrlEncodingCodec</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/AdminService.html" data-type="entity-link">AdminService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/EntityDataService.html" data-type="entity-link">EntityDataService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/EntityGraphService.html" data-type="entity-link">EntityGraphService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/ConfigurationParameters.html" data-type="entity-link">ConfigurationParameters</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzAttributeSearchResponse.html" data-type="entity-link">SzAttributeSearchResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzAttributeSearchResponseData.html" data-type="entity-link">SzAttributeSearchResponseData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzAttributeSearchResult.html" data-type="entity-link">SzAttributeSearchResult</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzBaseRelatedEntity.html" data-type="entity-link">SzBaseRelatedEntity</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzBaseResponse.html" data-type="entity-link">SzBaseResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzBaseResponseLinks.html" data-type="entity-link">SzBaseResponseLinks</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataSourceRecordSummary.html" data-type="entity-link">SzDataSourceRecordSummary</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataSourcesResponse.html" data-type="entity-link">SzDataSourcesResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataSourcesResponseData.html" data-type="entity-link">SzDataSourcesResponseData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityData.html" data-type="entity-link">SzEntityData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityFeature.html" data-type="entity-link">SzEntityFeature</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityIdentifier.html" data-type="entity-link">SzEntityIdentifier</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityIdentifiers.html" data-type="entity-link">SzEntityIdentifiers</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityNetworkData.html" data-type="entity-link">SzEntityNetworkData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityNetworkResponse.html" data-type="entity-link">SzEntityNetworkResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityPath.html" data-type="entity-link">SzEntityPath</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityPathData.html" data-type="entity-link">SzEntityPathData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityPathResponse.html" data-type="entity-link">SzEntityPathResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityRecord.html" data-type="entity-link">SzEntityRecord</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityResponse.html" data-type="entity-link">SzEntityResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzError.html" data-type="entity-link">SzError</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzErrorResponse.html" data-type="entity-link">SzErrorResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzLicenseInfo.html" data-type="entity-link">SzLicenseInfo</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzLicenseResponse.html" data-type="entity-link">SzLicenseResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzLoadRecordResponse.html" data-type="entity-link">SzLoadRecordResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzLoadRecordResponseData.html" data-type="entity-link">SzLoadRecordResponseData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRecordId.html" data-type="entity-link">SzRecordId</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRecordResponse.html" data-type="entity-link">SzRecordResponse</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRecordResponseData.html" data-type="entity-link">SzRecordResponseData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRelatedEntity.html" data-type="entity-link">SzRelatedEntity</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzResolvedEntity.html" data-type="entity-link">SzResolvedEntity</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzResponseWithRawData.html" data-type="entity-link">SzResponseWithRawData</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));
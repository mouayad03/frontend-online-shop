<?php declare(strict_types=1);

/**
 * @license Apache 2.0
 */

namespace OpenApi\Annotations;

use OpenApi\Generator;

/**
 * @Annotation
 * A "Security Scheme Object":
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#securitySchemeObject
 */
class SecurityScheme extends AbstractAnnotation
{
    /**
     * $ref See http://json-schema.org/latest/json-schema-core.html#rfc.section.7.
     *
     * @var string
     */
    public $ref = Generator::UNDEFINED;

    /**
     * The key into OpenApi->security array.
     *
     * @var string
     */
    public $securityScheme = Generator::UNDEFINED;

    /**
     * The type of the security scheme.
     *
     * @var string
     */
    public $type = Generator::UNDEFINED;

    /**
     * A short description for security scheme.
     *
     * @var string
     */
    public $description = Generator::UNDEFINED;

    /**
     * The name of the header or query parameter to be used.
     *
     * @var string
     */
    public $name = Generator::UNDEFINED;

    /**
     * Required The location of the API key.
     *
     * @var string
     */
    public $in = Generator::UNDEFINED;

    /**
     * The flow used by the OAuth2 security scheme.
     *
     * @var Flow[]
     */
    public $flows = Generator::UNDEFINED;

    /**
     * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an
     * authorization server, so this information is primarily for documentation purposes.
     *
     * @var string
     */
    public $bearerFormat = Generator::UNDEFINED;

    /**
     * The name of the HTTP Authorization scheme.
     *
     * @see https://tools.ietf.org/html/rfc7235#section-5.1
     *
     * @var string
     */
    public $scheme = Generator::UNDEFINED;

    /**
     * OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.
     *
     * @var string
     */
    public $openIdConnectUrl = Generator::UNDEFINED;

    /**
     * @inheritdoc
     */
    public static $_required = ['securityScheme', 'type'];

    /**
     * @inheritdoc
     */
    public static $_types = [
        'type' => ['http', 'apiKey', 'oauth2', 'openIdConnect'],
        'description' => 'string',
        'name' => 'string',
        'bearerFormat' => 'string',
        'in' => ['query', 'header', 'cookie'],
    ];

    /**
     * @inheritdoc
     */
    public static $_nested = [
        Flow::class => ['flows', 'flow'],
        Attachable::class => ['attachables'],
    ];

    /**
     * @inheritdoc
     */
    public static $_parents = [
        Components::class,
    ];

    /**
     * @inheritdoc
     */
    public function merge(array $annotations, bool $ignore = false): array
    {
        $unmerged = parent::merge($annotations, $ignore);

        if ($this->type === 'oauth2') {
            $this->name = Generator::UNDEFINED;
        }

        return $unmerged;
    }
}

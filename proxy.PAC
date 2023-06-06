function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.local")) {return "SOCKS5 localhost:1337";}
	if (shExpMatch(url, "*.local/*")) {return "SOCKS5 localhost:1337";}
	if (shExpMatch(url, "*.local:*/*")) {return "SOCKS5 localhost:1337";}
	if (shExpMatch(url, "local.abacus")) {return "SOCKS5 localhost:1337";}
	if (shExpMatch(url, "local.abacus/*")) {return "SOCKS5 localhost:1337";}
	if (shExpMatch(url, "local.abacus:*/*")) {return "SOCKS5 localhost:1337";}
    // if (isInNet(host, "192.168.0.0", "255.255.0.0")) {return "SOCKS5 localhost:1337";}
    // if (isInNet(host, "12.0.0.0", "255.255.0.0")) {return "SOCKS5 localhost:1337";}
    if (isInNet(host, "127.0.0.0", "255.255.0.0")) {return "SOCKS5 localhost:1337";}
    if (isInNet(host, "127.0.0.1", "255.255.255.255")) {return "SOCKS5 localhost:1337";}

	return "DIRECT";
}
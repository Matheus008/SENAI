$ruleAccesPC2 = @{
    Name                     = “RDP”
    Access                   = "Allow"
    Protocol                 = "Tcp"
    Direction                = "Inbound"
    Priority                 = 110
    SourceAddressPrefix      = "Internet"
    SourcePortRange          = "*"
    DestinationPortRange     = 3389
    DestinationAddressPrefix = "Internet"
}
$regradeacessoPC2 = New-AzNetworkSecurityRuleConfig @ruleAccesPC2

$gsPC2 = @{
    ResourceGroupName = “Automacaogroup2”
    Location          = “brazilsouth”
    Name              = “GrupodeSegurancaPC2”
    SecurityRules     = $regradeacessoPC2
}
$grupodesegurancaPC2 = New-AzNetworkSecurityGroup @gsPC2

$srPC2 = @{
    Name                 = “subredeautPC2”
    NetworkSecurityGroup = $grupodesegurancaPC2
    AddressPrefix        = “10.1.3.0/24”
    VirtualNetwork = $redevirtual
}
Add-AzVirtualNetworkSubnetConfig @srPC2


$redevirtual | Set-AzVirtualNetwork

$vnet = Get-AzVirtualNetwork -Name 'redevirtualaut' -ResourceGroupName 'Automacaogroup2'

$ipPC2 = @{
    Name              = “meuIpPublico”
    ResourceGroupName = “Automacaogroup2”
    Location          = “brazilsouth”
    Sku               = “Standard”
    AllocationMethod  = “Static”
    IPAddressVersion  = “IPv4”
    Zone              = 1, 2 , 3
}
New-AzPublicIpAddress @ipPC2


$prPC2 = @{
    Name              = “placaderedePC2”
    ResourceGroupName = “Automacaogroup2”
    Location          = “brazilsouth”
    Subnet            = $vnet.Subnets[0]
}

$placaderedePC2 = New-AzNetworkInterface @prPC2


$cred3 = Get-Credential

$tamanhoMV3 = @{
    VMName = "IronMaiden"
    VMSize = “Standard_B4ms”
}


$soMV3 = @{
    ComputerName = “IronMaiden”
    Credential   = $cred3
}


$imagemMV3 = @{
    PublisherName = “MicrosoftWindowsServer”
    Offer         = “WindowsServer”
    Skus          = “2022-Datacenter”
    Version       = “latest”
}


$confMV3 = New-AzVMConfig @tamanhoMV3 | Set-AzVMOperatingSystem @soMV3 -Windows | 
Set-AzVMSourceImage @imagemMV3 | Add-AzVMNetworkInterface –Id $placaderedePC2.Id


$mvMV3 = @{
    ResourceGroupName   = “Automacaogroup2”
    Location            = “brazilsouth”
    VM                  = $confMV3
}
New-AzVM @mvMV3


$ipPublicoMV3 = @{
    Name              = “meuIpPublico”
    ResourceGroupName = “Automacaogroup2”
}


Get-AzPublicIpAddress @ipPublicoMV3 | Select "IpAddress", "PublicIpAllocationMethod" | Format-Table